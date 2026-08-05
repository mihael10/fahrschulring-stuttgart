export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span
          className={`text-xs font-bold uppercase tracking-wider ${
            light ? "text-amber-400" : "text-amber-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl font-extrabold sm:text-4xl ${
          light ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base ${light ? "text-navy-100/75" : "text-navy-700"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
