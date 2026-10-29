export type Wing = "Gothic" | "Letters" | "Observatory" | "Atlas" | "Night";

export type Cover = "crimson" | "ink" | "brass" | "wine" | "ash" | "blood";

export type Book = {
  id: string;
  title: string;
  author: string;
  wing: Wing;
  year: string;
  pages: number;
  price: number;
  edition: string;
  blurb: string;
  excerpt: string;
  cover: Cover;
};

export const wings: Array<Wing | "All"> = [
  "All",
  "Gothic",
  "Letters",
  "Observatory",
  "Atlas",
  "Night",
];

export const books: Book[] = [
  {
    id: "red-stair",
    title: "The Red Stair",
    author: "I. Voss",
    wing: "Gothic",
    year: "1894",
    pages: 312,
    price: 28,
    edition: "Night cloth",
    blurb: "A house with one stair that only appears after the lamps are low, and the reader who keeps climbing it.",
    excerpt:
      "The stair was not there at noon. By the second candle it had remembered itself, each tread the color of a sealed letter.",
    cover: "crimson",
  },
  {
    id: "letters-never",
    title: "Letters Never Sent",
    author: "M. Calder",
    wing: "Letters",
    year: "1911",
    pages: 224,
    price: 22,
    edition: "Ribbon copy",
    blurb: "Correspondence from a binder who addressed every book as if it might answer.",
    excerpt:
      "Dear margin — I have left you wider tonight. If you must speak, speak where the thumb rests.",
    cover: "wine",
  },
  {
    id: "grammar-night",
    title: "A Grammar of Night",
    author: "H. Ell",
    wing: "Observatory",
    year: "1888",
    pages: 406,
    price: 34,
    edition: "Observatory set",
    blurb: "Rules for naming darkness, written when the dome still opened over the east lawn.",
    excerpt:
      "Do not call it black. Black is a decision. What you are looking at has not decided yet.",
    cover: "ink",
  },
  {
    id: "coast",
    title: "Coast Without Maps",
    author: "S. Pell",
    wing: "Atlas",
    year: "1902",
    pages: 268,
    price: 26,
    edition: "Salt linen",
    blurb: "A voyage catalog of shores that refuse to stay where the chart last left them.",
    excerpt:
      "We folded the map until the sea was the size of a palm, and still it kept arriving.",
    cover: "ash",
  },
  {
    id: "wax",
    title: "Wax and Wick",
    author: "L. Moreau",
    wing: "Night",
    year: "1920",
    pages: 176,
    price: 18,
    edition: "Candle quarto",
    blurb: "Poems timed to the life of a single flame in the reading gallery.",
    excerpt:
      "Hold still. The wick is doing the only honest work in the room.",
    cover: "brass",
  },
  {
    id: "house-reads",
    title: "The House That Reads",
    author: "I. Voss",
    wing: "Gothic",
    year: "1899",
    pages: 354,
    price: 32,
    edition: "Estate binding",
    blurb: "How a library became a residence, and why the doors insist on opening inward.",
    excerpt:
      "Guests ask where the owner sleeps. The house, offended, offers them a chair.",
    cover: "blood",
  },
  {
    id: "margin-storm",
    title: "Margin Notes for a Storm",
    author: "A. Quinn",
    wing: "Letters",
    year: "1916",
    pages: 198,
    price: 20,
    edition: "Storm proof",
    blurb: "Notes passed between two readers during a week the windows would not shut.",
    excerpt:
      "If the rain reaches page forty, stop. That chapter was not built for weather.",
    cover: "wine",
  },
  {
    id: "iron-orchard",
    title: "Iron Orchard",
    author: "S. Pell",
    wing: "Atlas",
    year: "1877",
    pages: 290,
    price: 30,
    edition: "Field atlas",
    blurb: "An inland journey through walled gardens that grow hinges instead of fruit.",
    excerpt:
      "Every tree had a latch. We did not pick. We opened.",
    cover: "brass",
  },
  {
    id: "theorem",
    title: "Theorem of Quiet",
    author: "H. Ell",
    wing: "Observatory",
    year: "1908",
    pages: 240,
    price: 27,
    edition: "Proof copy",
    blurb: "A short philosophy of attention, argued entirely after midnight.",
    excerpt:
      "Quiet is not the absence of sound. It is the decision not to chase the next one.",
    cover: "ink",
  },
  {
    id: "velvet",
    title: "Velvet Index",
    author: "L. Moreau",
    wing: "Night",
    year: "1926",
    pages: 164,
    price: 24,
    edition: "Gallery slip",
    blurb: "An index of fabrics, shadows, and the people who mistook one for the other.",
    excerpt:
      "Entry 14: a sleeve so dark the arm inside it had to be taken on trust.",
    cover: "crimson",
  },
  {
    id: "door-unlocked",
    title: "Door, Unlocked",
    author: "M. Calder",
    wing: "Gothic",
    year: "1881",
    pages: 288,
    price: 29,
    edition: "Key edition",
    blurb: "Thirteen keys and the rooms they were never meant to admit.",
    excerpt:
      "The lock turned before the key did. Someone on the other side had been practicing.",
    cover: "blood",
  },
  {
    id: "last-lamp",
    title: "The Last Lamp",
    author: "I. Voss",
    wing: "Night",
    year: "1931",
    pages: 210,
    price: 23,
    edition: "Closing bell",
    blurb: "A closing-hour novel. The vault keeps one lamp for the reader who will not leave.",
    excerpt:
      "They dimmed the hall and forgot me, which is the polite way a library says stay.",
    cover: "ash",
  },
];

export const plans = [
  {
    id: "visitor",
    name: "Visitor",
    price: 0,
    cadence: "the door",
    note: "Walk the hall. The stacks stay in view.",
    points: ["Browse every wing", "Read opening pages", "No account required"],
  },
  {
    id: "resident",
    name: "Resident",
    price: 12,
    cadence: "month",
    note: "A key to the night reading room.",
    featured: true,
    points: ["Two editions each month", "A private shelf", "Night room, no feed"],
  },
  {
    id: "curator",
    name: "Curator",
    price: 28,
    cadence: "month",
    note: "For readers who arrange the house, not only visit it.",
    points: ["Six editions each month", "Early wing openings", "Notes from the binder"],
  },
  {
    id: "estate",
    name: "Estate",
    price: 76,
    cadence: "month",
    note: "The full house, including the bindery's quiet list.",
    points: ["Every new edition", "A named alcove", "Invoice on the house ledger"],
  },
] as const;

export function money(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function findBook(id: string) {
  return books.find((book) => book.id === id);
}
