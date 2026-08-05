export type GoogleReview = {
  id: string;
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  relativeTime: string;
  text?: string;
};

export type GoogleReviewsData = {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
};

// Live data via Google Places API (New). Requires GOOGLE_PLACES_API_KEY and
// GOOGLE_PLACE_ID (real "ChIJ..." place ID, not the ftid/CID used for the
// static maps link in site.ts). See knowledge/content-editing.md for how to
// find the real place ID. Returns null if unconfigured or the call fails —
// callers fall back to the dated static snapshot in src/content/site.ts,
// same "structurally can't fabricate" pattern as testimonials.ts.
export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      // Revalidate once a day — reviews don't need to be second-fresh, and
      // this keeps API usage (and Google's caching expectations) reasonable.
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!res.ok) {
      console.error("[google-reviews] Places API request failed", res.status);
      return null;
    }

    const data = await res.json();

    const reviews: GoogleReview[] = (data.reviews ?? []).map(
      (r: {
        name: string;
        rating: number;
        relativePublishTimeDescription: string;
        text?: { text: string };
        authorAttribution?: { displayName: string; photoUri?: string };
      }) => ({
        id: r.name,
        authorName: r.authorAttribution?.displayName ?? "Google Nutzer:in",
        authorPhotoUrl: r.authorAttribution?.photoUri,
        rating: r.rating,
        relativeTime: r.relativePublishTimeDescription,
        text: r.text?.text,
      })
    );

    return {
      rating: data.rating ?? 0,
      totalReviews: data.userRatingCount ?? 0,
      reviews,
    };
  } catch (error) {
    console.error("[google-reviews] Failed to fetch Google reviews", error);
    return null;
  }
}
