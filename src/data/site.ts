export const EMAIL = "antonioyong.realty@gmail.com";
export const PHONE_DISPLAY = "(647) 855-1557";
export const PHONE_TEL = "+16478551557";
export const GOOGLE_PROFILE = "https://share.google/rK3fjtlqQiAwyZHn9";
export const ONBOARDING_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSc_1rGFi7ElHC0_C5sC1RWGS2UCJTsf1ZDCdSC7Jcs6NQaEbg/viewform?usp=pp_url";

export const NAV = [
  { label: "Projects", href: "/#projects" },
  { label: "Rebate Calculator", href: "/#rebate-calculator" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Reviews", href: "/#reviews" },
];

export type Project = {
  name: string;
  area: string;
  developer: string;
  priceFrom: string;
  occupancy: string;
  status: "VIP allocation open" | "Platinum access" | "Registering now";
  highlights: string[];
};

/**
 * Placeholder allocation data — swap in the live VIP list any time.
 */
export const projects: Project[] = [
  {
    name: "Ellis Yards",
    area: "Etobicoke — Islington & Bloor",
    developer: "Sample Developments",
    priceFrom: "$589,900",
    occupancy: "2028",
    status: "VIP allocation open",
    highlights: ["5% deposit structure", "Capped development charges", "Subway at the door"],
  },
  {
    name: "Meridian Union",
    area: "Downtown Toronto — King West",
    developer: "Sample Developments",
    priceFrom: "$724,000",
    occupancy: "2029",
    status: "Platinum access",
    highlights: ["Free assignment", "1 year free maintenance", "Right to lease during interim"],
  },
  {
    name: "North Line Towns",
    area: "Vaughan — Highway 7",
    developer: "Sample Developments",
    priceFrom: "$829,000",
    occupancy: "2027",
    status: "Registering now",
    highlights: ["Freehold towns", "Extended deposit", "$20K décor credit"],
  },
  {
    name: "Harbour Bend",
    area: "Mississauga — Port Credit",
    developer: "Sample Developments",
    priceFrom: "$649,500",
    occupancy: "2028",
    status: "VIP allocation open",
    highlights: ["Lakeview exposures", "Parking discount", "Assignment fee waived"],
  },
];

export type Review = {
  quote: string;
  name: string;
  context: string;
};

export const reviews: Review[] = [
  {
    quote:
      "Antonio walked us through every floor plan, the deposit schedule and the fine print in the agreement. We knew exactly what we were signing before the 10 day cooling off period ended.",
    name: "First-time buyer",
    context: "1 bed + den, Etobicoke",
  },
  {
    quote:
      "The rebate was real. It landed about a month after closing, exactly as promised, with no chasing.",

    name: "Investor client",
    context: "2 bed, downtown Toronto",
  },
  {
    quote:
      "He talked us out of one project and into a better one. That is the part most agents skip.",
    name: "Move-up buyer",
    context: "Townhome, Vaughan",
  },
];
