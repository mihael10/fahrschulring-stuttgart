import { SectionHeading } from "./SectionHeading";
import { site } from "@/content/site";
import { googleReviewQuotes } from "@/content/google-review-quotes";
import { getGoogleReviews } from "@/lib/google-reviews";
import { ReviewText } from "./ReviewText";

const formatRating = (rating: number) =>
  rating.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function Stars({ rating, className = "h-4 w-4" }: { rating: number; className?: string }) {
  const rounded = Math.round(rating);
  return (
    <div role="img" aria-label={`${formatRating(rating)} von 5 Sternen`} className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={className} fill={i < rounded ? "currentColor" : "#e5e7eb"} aria-hidden="true">
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.2-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.2-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export async function GoogleReviews() {
  const live = await getGoogleReviews();

  const rating = live?.rating ?? site.googleReviews.snapshotRating;
  const totalReviews = live?.totalReviews ?? site.googleReviews.snapshotCount;
  // Live reviews when the Places API is configured, otherwise the hand-copied
  // real quotes from src/content/google-review-quotes.ts.
  const reviews = live
    ? live.reviews
        .filter((r) => r.text)
        .slice(0, 6)
        .map((r) => ({ id: r.id, authorName: r.authorName, rating: r.rating, text: r.text ?? "", meta: r.relativeTime }))
    : googleReviewQuotes.map((q) => ({ id: q.author, authorName: q.author, rating: q.rating, text: q.text, meta: "Google-Bewertung" }));

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Google Bewertungen" title="Das sagen unsere Fahrschüler:innen" />

        <div className="reveal mx-auto mt-12 flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-green-100 bg-white p-8 text-center shadow-xl shadow-green-900/5 sm:flex-row sm:p-10 sm:text-left">
          <div className="flex items-center gap-4">
            <GoogleLogo className="h-12 w-12 shrink-0" />
            <div className="text-6xl font-extrabold leading-none tracking-tight text-green-950">
              {formatRating(rating)}
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center gap-2 sm:items-start sm:border-l sm:border-green-100 sm:pl-6">
            <Stars rating={rating} className="h-6 w-6" />
            <p className="text-sm font-semibold text-green-950">
              aus {totalReviews.toLocaleString("de-DE")} Bewertungen auf Google
            </p>
          </div>

          <a
            href={site.googleReviews.reviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-green-200 px-5 py-2.5 text-sm font-semibold text-green-900 transition-colors hover:border-green-400 hover:bg-green-50"
          >
            Bewertungen lesen
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {reviews.length > 0 && (
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.id}
                className="reveal flex flex-col rounded-2xl border border-green-100 bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-green-900/5"
              >
                <div className="flex items-center justify-between">
                  <Stars rating={review.rating} />
                  <GoogleLogo className="h-5 w-5" />
                </div>
                <ReviewText text={review.text} />
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700"
                  >
                    {review.authorName.charAt(0).toUpperCase()}
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold text-green-950">{review.authorName}</span>
                    <span className="text-green-600">{review.meta}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
