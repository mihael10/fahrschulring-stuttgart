export type Testimonial = {
  quote: string;
  author: string;
  class?: string;
};

// Intentionally empty: the old site published no reviews, and none are
// fabricated here. Add real Google/Fahrschul-Bewertung quotes as they come in —
// the <Testimonials> component renders nothing while this stays empty.
export const testimonials: Testimonial[] = [];
