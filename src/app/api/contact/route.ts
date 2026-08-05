import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/content/site";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  wunschklasse: string;
  message?: string;
  consent: boolean;
  company?: string; // honeypot
};

const wantedFields = ["name", "email", "wunschklasse", "consent"] as const;

function isValidPayload(body: unknown): body is ContactPayload {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    wantedFields.every((f) => f in b) &&
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    /.+@.+\..+/.test(b.email) &&
    typeof b.wunschklasse === "string" &&
    b.wunschklasse.trim().length > 0 &&
    b.consent === true
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot: bots fill every field, humans never see this one.
  if (typeof (body as Record<string, unknown>)?.company === "string" && (body as Record<string, unknown>).company !== "") {
    return NextResponse.json({ ok: true });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Bitte alle Pflichtfelder ausfüllen." }, { status: 400 });
  }

  const { name, email, phone, wunschklasse, message } = body;

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.warn(
      "[contact] SMTP nicht konfiguriert – Anfrage wurde nicht per E-Mail versendet.",
      { name, email, phone, wunschklasse, message }
    );
    return NextResponse.json(
      { error: "Der Versand ist derzeit nicht verfügbar. Bitte ruf uns direkt an." },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"Fahrschulring Website" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `Neue Anfrage: ${wunschklasse} – ${name}`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Telefon: ${phone || "-"}`,
        `Wunschklasse: ${wunschklasse}`,
        `Nachricht: ${message || "-"}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] E-Mail-Versand fehlgeschlagen", error);
    return NextResponse.json(
      { error: "Der Versand ist fehlgeschlagen. Bitte versuch es später erneut." },
      { status: 502 }
    );
  }
}
