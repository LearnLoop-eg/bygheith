export const roles = [
  { org: "LearnLoop", role: "Founder" },
  { org: "Beyond Reason", role: "Partner" },
  { org: "Core Livings, Mountain View", role: "Leading marketing" },
];

export const trustedBy = [
  "Mountain View",
  "Core Livings",
  "Forbes Middle East",
  "Beyond Reason",
  "Cassbana",
  "Digitology",
  "The Creative Zone",
  "LearnLoop",
];

export type Venture = {
  slug: string;
  name: string;
  role: string;
  line: string;
  body: string;
  stats: { v: string; l: string }[];
  href: string;
  external: boolean;
  cta: string;
  img: string;
  alt: string;
  pos: string;
};

export const ventures: Venture[] = [
  {
    slug: "learnloop",
    name: "LearnLoop",
    role: "Founder",
    line: "The skill economy, without the money.",
    body: "A peer-to-peer skill-exchange platform for Egypt and MENA. Teach what you know, earn a credit, spend it to learn anything, from Arabic to Python to Shopify. I founded it, and I build it end to end: product, brand and growth.",
    stats: [
      { v: "94", l: "skills live" },
      { v: "11", l: "categories" },
    ],
    href: "https://joinlearnloop.com",
    external: true,
    cta: "Visit LearnLoop",
    img: "/images/shoot/laptop-front.jpg",
    alt: "Ahmed Gheith working on a laptop outdoors",
    pos: "50% 35%",
  },
  {
    slug: "beyond-reason",
    name: "Beyond Reason",
    role: "Partner",
    line: "Premium sportswear, built digital-first.",
    body: "Golf, tennis and padel apparel for Egypt and Dubai. As partner, I built the brand's entire digital engine from zero: the Shopify store, the catalog, payments, delivery across Egypt, and the performance marketing that drives it.",
    stats: [
      { v: "457", l: "SKUs structured" },
      { v: "1,553", l: "units catalogued" },
    ],
    href: "/work",
    external: false,
    cta: "See the build",
    img: "/images/shoot/call-fairway-side.jpg",
    alt: "Ahmed Gheith in Beyond Reason golf wear on the course",
    pos: "50% 30%",
  },
  {
    slug: "core-livings",
    name: "Core Livings",
    role: "Leading marketing",
    line: "Living, managed, inside Mountain View.",
    body: "Rentals, resale and property management across Mountain View communities. I lead the marketing: the brand story, the positioning and the growth plan behind it.",
    stats: [],
    href: "/book",
    external: false,
    cta: "Talk real estate marketing",
    img: "/images/shoot/ipad-wall.jpg",
    alt: "Ahmed Gheith mid-conversation, tablet in hand",
    pos: "50% 22%",
  },
];

export const caseStudies = [
  {
    slug: "beyond-reason",
    tag: "Ecommerce, zero to live",
    title: "Beyond Reason",
    summary:
      "The complete digital engine for a premium golf, tennis and padel brand, designed, built and launched from nothing.",
    detail:
      "A Shopify store designed from scratch. A 457-SKU, 1,553-unit catalog structured and imported. Paymob and valU payments, Instagram Shopping, and a delivery network mapped across Egypt's governorates. Built to sell on day one.",
    metrics: [
      { label: "SKUs structured", value: "457" },
      { label: "Units catalogued", value: "1,553" },
    ],
  },
  {
    slug: "performance-media",
    tag: "Performance marketing",
    title: "Paid media that pays",
    summary:
      "A Meta advertising engine built for purchases, not vanity metrics, and steered through the learning phase to stable results.",
    detail:
      "Pixel setup, purchase-objective campaigns on a 30,000 EGP monthly budget, creative testing that surfaced a clear winner, and the discipline to let the algorithm learn before scaling spend.",
    metrics: [{ label: "Monthly budget", value: "30k EGP" }],
  },
  {
    slug: "brand-from-zero",
    tag: "Brand strategy",
    title: "A brand from zero",
    summary:
      "Positioning, identity and creative direction that let a new label enter a crowded market looking like it had always belonged.",
    detail:
      "Brand identity, collection naming, product storytelling, the Instagram grid and a full creative system, down to the Reels production workflow. One premium voice, consistent from the first post.",
    metrics: [],
  },
];

export const credentials = [
  {
    role: "Leading marketing",
    org: "Core Livings",
    note: "Brand, positioning and growth for rentals, resale and property management across Mountain View communities.",
  },
  {
    role: "Partner",
    org: "Beyond Reason",
    note: "Built the digital strategy, online store and creative direction of a premium sportswear brand from the ground up.",
  },
  {
    role: "Founder",
    org: "LearnLoop",
    note: "Founded and building a peer-to-peer skill-exchange platform for Egypt and MENA.",
  },
  {
    role: "Senior Digital Marketing Manager",
    org: "Mountain View",
    note: "Digital marketing for one of Egypt's major real estate developers.",
  },
  {
    role: "Head of Digital Marketing",
    org: "Cassbana",
    note: "Owned the digital growth function for a fintech brand.",
  },
  {
    role: "Social Media Lead",
    org: "Forbes Middle East",
    note: "Led social for one of the region's most recognised media names.",
  },
  {
    role: "Account Director",
    org: "Digitology",
    note: "Directed brand accounts on the agency side across MENA.",
  },
  {
    role: "Co-founder",
    org: "The Creative Zone",
    note: "Co-founded and grew a creative venture.",
  },
];

export const offers = [
  {
    title: "Strategy session",
    topic: "Strategy session",
    body: "One focused session on your brand, growth or ecommerce problem. You leave with a clear plan and the first three moves, not a deck.",
  },
  {
    title: "Ecommerce build",
    topic: "Ecommerce build",
    body: "Store, catalog, payments, delivery and launch marketing, built to sell from day one. The Beyond Reason playbook, applied to your brand.",
  },
  {
    title: "Growth partnership",
    topic: "Growth partnership",
    body: "Ongoing brand and performance strategy. I lead it personally; my team executes. For brands that want a senior marketer at the table.",
  },
  {
    title: "Speaking & podcast",
    topic: "Speaking or podcast",
    body: "Talks, panels and podcast conversations on marketing, ecommerce, real estate and building in MENA.",
  },
];
