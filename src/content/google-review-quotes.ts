export type GoogleReviewQuote = {
  author: string;
  rating: number;
  text: string;
};

// Real 5★ reviews from the business's Google listing, copied from the
// owner's screenshots of the expanded reviews on 2026-10-02, verbatim —
// shown under the rating card in GoogleReviews.tsx while no Places API key
// is configured (live reviews replace them once it is). The cards clamp
// long text visually; the "Bewertungen lesen" link leads to the listing.
// Only add a review from its full, expanded text: never paraphrase, never
// cut a review so it reads more positive than it is, and don't include
// reviews written by anyone involved in building this site.
export const googleReviewQuotes: GoogleReviewQuote[] = [
  {
    author: "Jasmin",
    rating: 5,
    text:
      "Große Empfehlung für diese Fahrschule! Gut organisiert, bei jeglichen Anliegen wird einem zuverlässig und zeitnah weitergeholfen. Das ganze Team ist super lieb, professionell und kompetent.\n\n" +
      "Eine besondere Empfehlung möchte ich für meine Fahrlehrerin Florije aussprechen.\n" +
      "Sie führte mich klar und strukturiert ans Autofahren heran, korrigierte mich bei Fehlern ruhig und vermittelte mir dadurch sehr viel Sicherheit und Selbstvertrauen.\n" +
      "Die Fahrstunden mit Flo haben immer Spaß gemacht, es herrschte eine super angenehme Atmosphäre. Ich habe mich durch ihre humorvolle, motivierende und geduldige Art sehr wohlgefühlt und konnte so endlich meine Fahrangst überwinden.\n" +
      "Sie hat mich bestens auf meine praktische Prüfung vorbereitet und ich habe dank ihr beim ersten Versuch bestanden.",
  },
  {
    author: "Hatem Ali",
    rating: 5,
    text: "I converted my foreign licence here and, thanks to my outstanding instructor Heiko, passed the practical exam on the first attempt. I also passed the theory on the first attempt through self-study with the school's theory app, which I can highly recommend. The management was also friendly, well organised and always reachable. Highly recommended!",
  },
  {
    author: "Nic",
    rating: 5,
    text: "Alles top\nKarol bester Mann",
  },
];
