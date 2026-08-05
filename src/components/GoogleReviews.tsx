import { SectionHeading } from "./SectionHeading";
import { site } from "@/content/site";
import { getGoogleReviews } from "@/lib/google-reviews";

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <div aria-label={`${rating} von 5 Sternen`} className="flex gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill={i < rounded ? "currentColor" : "#e5e7eb"}>
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7z" />
        </svg>
      ))}
    </div>
  );
}

export async function GoogleReviews() {
  const live = await getGoogleReviews();

  const rating = live?.rating ?? site.googleReviews.snapshotRating;
  const totalReviews = live?.totalReviews ?? site.googleReviews.snapshotCount;
  const reviews = live?.reviews ?? [];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Google Bewertungen" title="Das sagen unsere Fahrschüler:innen auf Google" />

        <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-2 text-center">
          <div className="text-4xl font-extrabold text-green-950">{rating.toFixed(1)}</div>
          <Stars rating={rating} />
          <p className="text-sm text-green-700">
            aus {totalReviews} Google-Bewertungen
            {!live && (
              <span className="block text-xs text-green-600/70">
                (Stand: {site.googleReviews.snapshotDate})
              </span>
            )}
          </p>
          <a
            href={site.googleReviews.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-sm font-semibold text-green-700 underline hover:text-green-900"
          >
            Alle Bewertungen auf Google ansehen
          </a>
        </div>

        {reviews.length > 0 && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 6).map((review) => (
              <figure key={review.id} className="rounded-2xl border border-green-100 bg-white p-6">
                <Stars rating={review.rating} />
                {review.text && (
                  <blockquote className="mt-3 text-sm text-green-800">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                )}
                <figcaption className="mt-4 text-sm font-semibold text-green-950">
                  {review.authorName}
                  <span className="ml-1 font-normal text-green-600">· {review.relativeTime}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
