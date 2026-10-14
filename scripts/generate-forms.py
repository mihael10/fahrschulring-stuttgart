"""Generate the fillable registration forms in public/formulare/.

Each PDF reproduces one of the school's paper "Ausbildungsvertrag" forms
(photos supplied by the owner on 2026-10-14) as an AcroForm: visitors type
into the fields in any PDF viewer, print, and sign in the office. Texts and
price lists are copied verbatim from the paper forms — don't edit them here
without the owner's go-ahead (see knowledge/content-editing.md → "Forms").

Run:  python3 scripts/generate-forms.py   (needs `pip install reportlab`)
"""

from pathlib import Path

from reportlab.lib.colors import HexColor, black
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

OUT = Path(__file__).resolve().parent.parent / "public" / "formulare"

W, H = A4
LEFT, RIGHT = 42, W - 42
MID = LEFT + (RIGHT - LEFT) * 0.58
GREY = HexColor("#555555")
FIELD_BG = HexColor("#eef7ef")
FIELD_BORDER = HexColor("#9cc9a3")

PERSONAL_ROWS = [
    (("Familienname", "familienname"), ("Vorname", "vorname")),
    (("E-Mail Adresse", "email"), "gender"),
    (("Straße", "strasse"), ("Telefon", "telefon")),
    (("PLZ / Ort", "plz_ort"), ("Mobil", "mobil")),
    (("Geburtsdatum", "geburtsdatum"), ("Geburtsort", "geburtsort")),
    (("Staatsangehörigkeit", "staatsangehoerigkeit"), ("Beruf", "beruf")),
]
LICENCE_ROWS = [
    (("Bei Erweiterung – Vorbesitz", "vorbesitz"), None),
    (("FS ausgestellt von", "fs_ausgestellt_von"), ("Am", "fs_ausgestellt_am")),
    (("Führerscheinnummer", "fs_nummer"), ("Sonstige Notizen", "notizen")),
]

DATA_NOTE_THIRD_PARTIES = (
    "Ich bin darauf hingewiesen worden, dass meine Daten ausschließlich für die Behörde, "
    "Führerscheinstelle und Finanzamt 10 Jahre gespeichert und an Dritte weitergegeben werden."
)
DATA_NOTE_NO_THIRD_PARTIES = (
    "Ich bin darauf hingewiesen worden, dass meine Daten ausschließlich für die Behörde, "
    "Führerscheinstelle und Finanzamt 10 Jahre gespeichert und nicht an Dritte weitergegeben werden."
)

FORMS = [
    {
        "file": "ausbildungsvertrag-klasse-b196.pdf",
        "title": "Ausbildungsvertrag Klasse B196",
        "class_line": "Beantrage:  Klasse B196",
        "prices": [
            ("Grundbetrag (4x Theorie; 10x Praktisch)", "700€"),
            ("Fahrstunde zu je 45 Minuten", "75,00 €"),
        ],
        "data_note": DATA_NOTE_THIRD_PARTIES,
    },
    {
        "file": "ausbildungsvertrag-klasse-a.pdf",
        "title": "Ausbildungsvertrag Klasse A",
        "class_line": "Beantragte Klasse(n):  A",
        "prices": [
            ("Grundbetrag", "500€"),
            ("Fahrstunde zu je 45 Minuten", "80€"),
            ("Praktische Unterweisung zu je 45 Minuten", "-----"),
            ("Schulung auf Bundes- und Landstraßen (Überland) 5x", "90€"),
            ("Schulung auf Autobahnen 4x", "90€"),
            ("Schulung bei Dämmerung oder Dunkelheit (Nachtfahrt) 3x", "90€"),
            ("Vorstellungsentgeld zur theoretischen Prüfung + TÜV", "80€ + TÜV"),
            ("Vorstellungsentgeld zur praktischen Prüfung + TÜV", "250€ + TÜV"),
        ],
        "data_note": DATA_NOTE_NO_THIRD_PARTIES,
        "motorcycle_gear": True,
    },
    {
        "file": "ausbildungsvertrag-klasse-b197.pdf",
        "title": "Ausbildungsvertrag Klasse B197",
        "class_line": "Beantrage:  Klasse B197",
        "prices": [
            ("Grundbetrag inkl. 10 Stunden Simulator", "600€"),
            ("Fahrstunde zu je 45 Minuten", "70€"),
            ("Praktische Unterweisung zu je 45 Minuten", "-----"),
            ("Schulung auf Bundes- und Landstraßen (Überland) 5x", "80€"),
            ("Schulung auf Autobahnen 4x", "80€"),
            ("Schulung bei Dämmerung oder Dunkelheit (Nachtfahrt) 3x", "80€"),
            ("Vorstellungsentgeld zur theoretischen Prüfung + TÜV", "80€ + TÜV"),
            ("Vorstellungsentgeld zur praktischen Prüfung + TÜV", "250€ + TÜV"),
        ],
        "data_note": DATA_NOTE_THIRD_PARTIES,
        "payment_note": (
            "„Bitte beachten Sie, dass vor der praktischen Prüfung alle offenen Rechnungen und "
            "Leistungen beglichen sein müssen. Andernfalls ist eine Teilnahme an der Prüfung nicht "
            "möglich. Bereits gebuchte Prüfungstermine werden jedoch in Rechnung gestellt.“"
        ),
    },
]


def wrap(c, text, font, size, width):
    words, lines, line = text.split(), [], ""
    for w in words:
        trial = f"{line} {w}".strip()
        if c.stringWidth(trial, font, size) <= width:
            line = trial
        else:
            lines.append(line)
            line = w
    if line:
        lines.append(line)
    return lines


def paragraph(c, text, y, font="Times-Roman", size=9.5, x=LEFT, width=RIGHT - LEFT, leading=12):
    c.setFont(font, size)
    for line in wrap(c, text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def text_field(c, name, tooltip, x, y, w, h=15):
    c.acroForm.textfield(
        name=name, tooltip=tooltip, x=x, y=y, width=w, height=h,
        fontName="Helvetica", fontSize=10, borderWidth=0.6,
        borderColor=FIELD_BORDER, fillColor=FIELD_BG, textColor=black,
        forceBorder=True,
    )


def checkbox(c, name, tooltip, x, y, size=11):
    c.acroForm.checkbox(
        name=name, tooltip=tooltip, x=x, y=y, size=size, buttonStyle="cross",
        borderWidth=0.6, borderColor=FIELD_BORDER, fillColor=FIELD_BG,
        textColor=black, forceBorder=True,
    )


def radio(c, group, value, tooltip, x, y, size=11):
    c.acroForm.radio(
        name=group, tooltip=tooltip, value=value, x=x, y=y, size=size,
        buttonStyle="circle", shape="circle", borderWidth=0.6,
        borderColor=FIELD_BORDER, fillColor=FIELD_BG, textColor=black,
        forceBorder=True, selected=False,
    )


def labelled_cell(c, label, key, x0, x1, y_top, row_h):
    c.setFont("Helvetica", 8.5)
    c.setFillColor(GREY)
    c.drawString(x0 + 5, y_top - 11, f"{label}:")
    c.setFillColor(black)
    text_field(c, key, label, x0 + 5, y_top - row_h + 4, x1 - x0 - 10)


def build(form):
    OUT.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT / form["file"]), pagesize=A4)
    c.setTitle(form["title"] + " – Fahrschulring Stuttgart")
    c.setAuthor("Fahrschulring Stuttgart GmbH")
    c.setSubject("Ausbildungsvertrag zum Ausfüllen")

    y = H - 52
    c.setFont("Times-BoldItalic", 17)
    title = "Ausbildungsvertrag Fahrschulring Stuttgart GmbH"
    tw = c.stringWidth(title, "Times-BoldItalic", 17)
    c.drawString((W - tw) / 2, y, title)
    c.line((W - tw) / 2, y - 2, (W + tw) / 2, y - 2)
    y -= 14

    row_h = 33
    c.setLineWidth(0.7)

    def draw_rows(rows, y):
        for left, right in rows:
            c.rect(LEFT, y - row_h, RIGHT - LEFT, row_h)
            if right is None:
                labelled_cell(c, *left, LEFT, RIGHT, y, row_h)
            else:
                c.line(MID, y, MID, y - row_h)
                labelled_cell(c, *left, LEFT, MID, y, row_h)
                if right == "gender":
                    c.setFont("Helvetica", 9)
                    c.drawString(MID + 10, y - 21, "M:")
                    radio(c, "geschlecht", "M", "Männlich", MID + 24, y - 24)
                    c.drawString(MID + 80, y - 21, "W:")
                    radio(c, "geschlecht", "W", "Weiblich", MID + 95, y - 24)
                else:
                    labelled_cell(c, *right, MID, RIGHT, y, row_h)
            y -= row_h
        return y

    y = draw_rows(PERSONAL_ROWS, y)
    c.rect(LEFT, y - 30, RIGHT - LEFT, 30)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(LEFT + 6, y - 20, form["class_line"])
    y -= 30
    y = draw_rows(LICENCE_ROWS, y)

    # Price list — copied verbatim from the paper form.
    y -= 20
    c.setFont("Helvetica-BoldOblique", 12)
    head = "Ausbildungs-Preisliste"
    hw = c.stringWidth(head, "Helvetica-BoldOblique", 12)
    c.drawString((W - hw) / 2, y, head)
    c.line((W - hw) / 2, y - 2, (W + hw) / 2, y - 2)
    y -= 8
    price_x = LEFT + (RIGHT - LEFT) * 0.78
    ph = 15
    for label, price in form["prices"]:
        c.rect(LEFT, y - ph, RIGHT - LEFT, ph)
        c.line(price_x, y, price_x, y - ph)
        c.setFont("Helvetica", 9.5)
        c.drawString(LEFT + 5, y - 11, label)
        c.drawString(price_x + 5, y - 11, price)
        y -= ph

    y -= 12
    c.setFont("Times-Roman", 9)
    for line in (
        "** Es gelten die allgemeinen Geschäftsbedingungen, welche in der Fahrschule aushängen.",
        "Mit der online Datenverarbeitung bin ich einverstanden. **",
    ):
        c.drawCentredString(W / 2, y, line)
        y -= 11

    y -= 8
    y = paragraph(c, form["data_note"], y)
    y -= 6
    checkbox(c, "whatsapp_einverstanden", "Einverständnis WhatsApp", LEFT + 60, y - 3)
    c.setFont("Times-Roman", 9.5)
    c.drawString(LEFT + 76, y, "Ja, ich bin einverstanden, dass die Fahrschule bzw. Fahrlehrer über WhatsApp mit mir kommunizieren.")
    y -= 18
    y = paragraph(c, "Ich bin darüber in Kenntnis gesetzt worden, dass Telefondaten an Dritte übertragen werden können.", y)

    if form.get("motorcycle_gear"):
        y -= 8
        c.setFont("Times-Roman", 9.5)
        c.drawString(LEFT, y, "Eigene Motorradbekleidung")
        radio(c, "motorradbekleidung", "JA", "Eigene Motorradbekleidung: Ja", LEFT + 190, y - 3)
        c.drawString(LEFT + 205, y, "JA")
        radio(c, "motorradbekleidung", "NEIN", "Eigene Motorradbekleidung: Nein", LEFT + 300, y - 3)
        c.drawString(LEFT + 315, y, "NEIN")
        y -= 15
        c.drawString(LEFT + 300, y, "Reinigungs- und Benutzungsgebühr 25,00 €")
        y -= 6

    if form.get("payment_note"):
        y -= 10
        y = paragraph(c, form["payment_note"], y, font="Times-Bold", size=10, leading=12.5)

    # Signatures happen on paper in the office.
    sig_y = 92
    text_field(c, "ort_datum", "Ort, Datum", LEFT, sig_y + 3, 100)
    cols = [
        (LEFT, LEFT + 100, "Ort, Datum"),
        (LEFT + 112, LEFT + 222, "Unterschrift Fahrschule"),
        (LEFT + 234, LEFT + 354, "Unterschrift des Fahrschülers"),
        (LEFT + 366, RIGHT, "Unterschrift des Gesetzlichen Vertreters"),
    ]
    c.setFont("Times-Roman", 8.5)
    for x0, x1, label in cols:
        c.line(x0, sig_y, x1, sig_y)
        c.drawCentredString((x0 + x1) / 2, sig_y - 11, label)

    c.setFillColor(GREY)
    c.setFont("Helvetica", 7.5)
    c.drawCentredString(
        W / 2, 40,
        "Am PC ausfüllen oder ausdrucken · Unterschrift erfolgt in der Fahrschule · "
        "Fahrschulring Stuttgart, Hegelstraße 48, 70174 Stuttgart · 0711 295928",
    )
    c.showPage()
    c.save()


if __name__ == "__main__":
    for f in FORMS:
        build(f)
        print("wrote", OUT / f["file"])
