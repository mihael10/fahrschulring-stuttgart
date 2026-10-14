import { ComponentProps } from "react";

export function PhoneIcon(props: ComponentProps<"svg">) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M3.4 2.2a1.5 1.5 0 0 1 2 .12l1.9 1.9a1.5 1.5 0 0 1 .3 1.7l-.8 1.7a.5.5 0 0 0 .1.56l3 3a.5.5 0 0 0 .56.1l1.7-.8a1.5 1.5 0 0 1 1.7.3l1.9 1.9a1.5 1.5 0 0 1 .12 2c-.6.7-1.6 1.6-2.9 1.7-2 .2-5.3-.4-8.6-3.7C1.9 9.9 1.3 6.6 1.5 4.6c.1-1.3 1-2.3 1.7-2.9z" />
    </svg>
  );
}

export function FacebookIcon(props: ComponentProps<"svg">) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  );
}

export function MailIcon(props: ComponentProps<"svg">) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M2.5 4.5A1.5 1.5 0 0 1 4 3h12a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 16 17H4a1.5 1.5 0 0 1-1.5-1.5v-11zM4 4.7v.5l6 4.2 6-4.2v-.5H4zm12 2.1-5.44 3.8a1 1 0 0 1-1.12 0L4 6.8v8.2h12V6.8z" />
    </svg>
  );
}
