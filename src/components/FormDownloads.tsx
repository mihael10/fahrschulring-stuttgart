import Link from "next/link";
import { basePath } from "@/lib/base-path";
import { DownloadIcon } from "./icons";
import type { RegistrationForm } from "@/content/forms";

// Download button for one registration form. A plain <a download> rather
// than <Link>: the PDF is a static file, not a route, and needs the basePath
// prefix by hand (see src/lib/base-path.ts).
export function FormDownloadButton({ form }: { form: RegistrationForm }) {
  return (
    <a
      href={`${basePath}${form.file}`}
      download
      data-cta={`form_download_${form.id}`}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold !text-green-950 !no-underline shadow-sm shadow-green-900/10 hover:bg-green-400"
    >
      <DownloadIcon className="h-4 w-4" />
      Formular {form.id} herunterladen (PDF)
    </a>
  );
}

// Compact box for the class pages: the forms for this class + a pointer to
// the full checklist on /anmeldung/.
export function FormDownloadBox({ forms }: { forms: RegistrationForm[] }) {
  if (forms.length === 0) return null;
  return (
    <div className="mt-6 rounded-2xl border border-green-200 bg-white p-5">
      <p className="font-bold text-green-950">Anmeldeformular zum Ausfüllen</p>
      <p className="mt-1 text-sm text-green-800">
        Am PC ausfüllen oder ausdrucken, mit den nötigen Unterlagen ins Büro bringen und vor Ort unterschreiben.
      </p>
      <ul className="mt-4 space-y-3">
        {forms.map((f) => (
          <li key={f.id} className="!ml-0 !list-none">
            <FormDownloadButton form={f} />
            <span className="ml-3 text-sm text-green-800">{f.title}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <Link href="/anmeldung/">Welche Unterlagen du mitbringen musst und wo du sie bekommst</Link>
      </p>
    </div>
  );
}
