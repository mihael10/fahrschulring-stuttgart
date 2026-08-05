export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-navy-950 py-16 sm:py-20">
      <div className="container-page">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
          {eyebrow}
        </span>
        <h1 className="mt-3 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-navy-100/75">{description}</p>
        )}
      </div>
    </section>
  );
}
