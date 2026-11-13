/**
 * Mary Butler's Granddaughter — site content.
 *
 * VERIFIED = from the business's public Facebook posts via findglocal
 * (checked 2026-11-13). No prices, phone, email or street address are
 * published — the bakery is "centrally located near downtown Houston" and
 * orders go through a form / Facebook message.
 * UNIVERSAL = standard content every custom-cake bakery website has, added
 * at the owner's request. The disclaimer banner on the site tells the
 * business owner to correct anything that is wrong.
 */

export const clinic = {
  name: "Mary Butler's Granddaughter",
  shortName: "Mary Butler's Granddaughter",
  tagline: "From-scratch custom cakes · Houston, Texas",
  phoneDisplay: "",
  phoneTel: "",
  address: "Near downtown Houston, TX",
  area: "Houston, TX",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mary+Butler%27s+Granddaughter+Houston+TX",
  facebookText: "Mary Butler's Granddaughter — find us on Facebook",
  facebookUrl: "https://www.facebook.com/652499911531956",
  instagramText: "",
  instagramUrl: "",
  owner: {
    name: "Renita",
    title: "Mary Butler's Granddaughter",
    bio: "Mary Butler's Granddaughter is named after my late grandmother — Dear, as we lovingly called her. I learned to cook and bake at her apron. Dear always prepared two hot meals a day, at least six days a week, and her outstanding items were pineapple coconut cake, banana pudding and biscuits. Every Friday night she would prepare biscuits with syrup, fried chicken and sausage, and family members would trickle in after a long day to eat and fellowship. I am Mary Butler's Granddaughter — and every cake I make carries her memory.",
  },
};

export type ServiceGroup = {
  title: string;
  blurb: string;
  items: string[];
  price?: string;
  image?: string;
  imageAlt?: string;
  verified?: boolean;
};

/** Menu grouped the way top custom-cake sites group it.
 *  VERIFIED groups are marked; prices are all "DM for a quote" — no
 *  prices are published anywhere. */
export const serviceGroups: ServiceGroup[] = [
  {
    title: "Custom Celebration Cakes",
    blurb:
      "From-scratch custom cakes for any celebration — made to order, in your colors and your theme. Send us a picture of what you love and we will make it yours.",
    items: ["Birthday cakes", "Mardi Gras themed cakes", "Any flavor or design you imagine"],
    price: "DM for a quote",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rainbow layer cake with colorful sprinkles and star decorations on a cake stand",
    verified: true,
  },
  {
    title: "Wedding Cakes",
    blurb:
      "Wedding cakes don't have to be white. Show your personality — rules are made to be broken. Are you a rule breaker?",
    items: ["Two-tier and multi-tier cakes", "Any color, any style", "Delivered safely with CakeSafe"],
    price: "DM for a quote",
    image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Elegant white cake decorated with lavender flowers",
    verified: true,
  },
  {
    title: "First Birthdays & Communions",
    blurb:
      "First birthdays, first communions and baby showers — make it fun but sophisticated. Such a prolific moment in a person's life deserves a cake to match.",
    items: ["First birthday cakes", "First communion cakes", "Baby shower cakes"],
    price: "DM for a quote",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Pink drip cake with fresh flowers on a cake stand",
    verified: true,
  },
  {
    title: "Dear's Favorites",
    blurb:
      "The recipes that started it all — my grandmother Dear's outstanding items, made the way she made them: pineapple coconut cake, banana pudding and biscuits.",
    items: ["Pineapple coconut cake", "Banana pudding", "Biscuits — Friday night style"],
    price: "DM for a quote",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Chocolate cherry cake with chocolate shavings on a dark plate",
    verified: true,
  },
];

/** VERIFIED — from the bakery's public posts. */
export const faqs = [
  {
    q: "How do I order a cake?",
    a: "Message us on Facebook — that is how every order starts. Tell us the occasion, the date, how many people it is for, and send a picture of any design you love. We will confirm the price and your delivery or pickup.",
  },
  {
    q: "Where are you located?",
    a: "We are centrally located near downtown Houston, Texas. Your cake is delivered to your event safely with the CakeSafe delivery system — it will arrive safely and intact.",
  },
  {
    q: "Do wedding cakes have to be white?",
    a: "No — wedding cakes don't have to be white. Show your personality. Rules are made to be broken. Tell us your colors and your style and we will make a cake that is yours.",
  },
  {
    q: "What is Dear's Favorites?",
    a: "The recipes of my late grandmother Mary Butler — Dear. Her outstanding items were pineapple coconut cake, banana pudding and biscuits. Every Friday night she made biscuits with syrup, fried chicken and sausage for the whole family.",
  },
  {
    q: "How far ahead should I order?",
    a: "Custom cakes are made to order, one at a time — so message us as early as you can, especially for weddings and big celebrations. The earlier you book, the more time we have to make it perfect.",
  },
  {
    q: "Do you deliver?",
    a: "Yes — your cake is delivered with the CakeSafe delivery system, so it arrives at your event safely and in one piece.",
  },
];

/** UNIVERSAL — the standard custom-cake ordering flow. */
export const orderSteps = [
  {
    title: "Message us on Facebook",
    body: "Tell us the occasion, the date, how many people it is for, and send a picture of any design you love.",
  },
  {
    title: "We confirm the price and date",
    body: "Every cake is custom, so we confirm your exact price and your delivery or pickup time before anything is baked.",
  },
  {
    title: "Delivered safely with CakeSafe",
    body: "Your cake travels in the CakeSafe delivery system — it arrives at your event safely and in one piece.",
  },
];
