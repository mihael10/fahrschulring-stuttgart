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
    <section className="bg-green-950 py-16 text-center sm:py-20">
      <div className="container-page flex flex-col items-center">
        <span className="animate-fade-up text-xs font-bold uppercase tracking-wider text-green-400">
          {eyebrow}
        </span>
        <h1 className="animate-fade-up mt-3 max-w-2xl text-3xl font-extrabold text-white [animation-delay:100ms] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="animate-fade-up mt-4 max-w-2xl text-base text-green-100/75 [animation-delay:200ms]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
