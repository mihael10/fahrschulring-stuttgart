import { ComponentProps } from "react";

export function PhoneIcon(props: ComponentProps<"svg">) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M3.4 2.2a1.5 1.5 0 0 1 2 .12l1.9 1.9a1.5 1.5 0 0 1 .3 1.7l-.8 1.7a.5.5 0 0 0 .1.56l3 3a.5.5 0 0 0 .56.1l1.7-.8a1.5 1.5 0 0 1 1.7.3l1.9 1.9a1.5 1.5 0 0 1 .12 2c-.6.7-1.6 1.6-2.9 1.7-2 .2-5.3-.4-8.6-3.7C1.9 9.9 1.3 6.6 1.5 4.6c.1-1.3 1-2.3 1.7-2.9z" />
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
