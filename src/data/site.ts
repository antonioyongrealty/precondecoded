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
 * Featured GTA pre-construction projects.
 */
export const projects: Project[] = [
  {
    name: "Seaton Whitevale",
    area: "Pickering, Seaton",
    developer: "Mattamy Homes",
    priceFrom: "From $705,301",
    occupancy: "2026",
    status: "VIP allocation open",
    highlights: [
      "New townhomes and detached homes",
      "Growing master-planned community",
      "Close to highways, GO Transit, parks and amenities",
    ],
  },
  {
    name: "Upper East Side",
    area: "Unionville, Markham",
    developer: "Fieldgate Homes",
    priceFrom: "Towns from $1.063M | Singles from $1.393M",
    occupancy: "TBD",
    status: "VIP allocation open",
    highlights: [
      "Unionville's successful community returns",
      "Premium freehold towns and detached homes",
      "Close to top schools, parks and Unionville amenities",
    ],
  },
  {
    name: "Whitby Meadows",
    area: "Whitby",
    developer: "Fieldgate Homes",
    priceFrom: "From $861,938",
    occupancy: "2027",
    status: "VIP allocation open",
    highlights: [
      "36' and 40' detached homes with double-car garages",
      "Family-friendly community near parks and schools",
      "Convenient access to Highways 401, 407 and 412",
    ],
  },
  {
    name: "Montara",
    area: "Aurora",
    developer: "Treasure Hill",
    priceFrom: "From $799,900",
    occupancy: "2027–2028",
    status: "VIP allocation open",
    highlights: [
      "Freehold townhomes up to 2,400 sq. ft.",
      "Two-car garages",
      "Minutes from Magna Golf Club and Highway 404",
    ],
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
      "Antonio was amazing to work with and was instrumental in us finding our first home. He was patient, knowledgeable, and always took the time to answer our questions and walk us through the process. Buying a home is stressful and there was a lot to learn, but Antonio made everything feel straightforward and manageable. He was always positive, always had a smile on his face, and genuinely cared about helping us find the right home. We’re incredibly grateful for his guidance and support and would highly recommend him to anyone looking for a real estate agent.",
    name: "Shaf V",
    context: "First home",
  },
  {
    quote:
      "I had an amazing experience working with Antonio while buying my first home. Him and his team made the entire process smooth and stress-free, guiding me through every step with patience and professionalism. I’m extremely grateful for their help and would highly recommend them to anyone looking to buy a home.",
    name: "Jason Cao",
    context: "First home",
  },
  {
    quote:
      "Antonio and his team of experts have been a tremendous help in my real estate journey. I cannot thank them enough to walk me through every step during the purchasing process. Their insights and professionalism is what gave me confidence to buy in this relatively unstable market. Cannot recommend them enough!",
    name: "Adrian Au",
    context: "Real estate journey",
  },
  {
    quote:
      "We had an excellent experience working with our realtor, Antonio, to purchase our first primary home, where my husband and I plan to raise our family. He was exceptional throughout the entire process—honest, patient, and highly knowledgeable. Antonio went above and beyond by driving us to numerous showings across different days, carefully listening to all of our specific and non-negotiable criteria, and helping us find a home that truly fit our needs while staying within our budget. His negotiation skills were outstanding and made a meaningful difference in securing the right property for us. He made what could have been a stressful process feel smooth and well supported. A wonderful professional to work with, and we will absolutely use him again for all our future property needs.",
    name: "Gloria Chan",
    context: "First primary home",
  },
  {
    quote:
      "We couldn't have asked for a better experience than working with Antonio and his team. They took a thoughtful, no-pressure approach that allowed us to make decisions comfortably at our own pace. They were always responsive, thorough, patient, and made all the difference in helping us secure our perfect first home while staying within budget. If you’re looking for a team you can trust to put your interests first, they are the ones to call.",
    name: "Linda N",
    context: "First home",
  },
  {
    quote:
      "Very easy to work with, highly communicative throughout, and knowledgeable about the real estate market. Antonio and his team did a fantastic job helping us negotiate a great deal on our first home. Highly recommend.",
    name: "will wu",
    context: "First home",
  },
  {
    quote:
      "Antonio and Kim were extremely helpful and patient. Great communication and they provided amazing explanations/logistics for my first property. I only wish all other first-time home buyers to have the same experience that I had. Thank you once again!",
    name: "Hanson Lau",
    context: "First property",
  },
  {
    quote:
      "Antonio was instrumental in helping my partner and I navigate the home purchasing process as a first time home buyer. His responsiveness, client care, and knowledge of the market and industry are first class!",
    name: "Kevin S",
    context: "First time home buyer",
  },
  {
    quote:
      "Very knowledgeable and friendly. Would recommend to reach out for any assistance with a precon!",
    name: "Benson L",
    context: "Pre-con purchase",
  },
  {
    quote:
      "Antonio and Kim are thorough, informative, and knowledgeable. The whole purchasing process is daunting, but they explained each step while providing us with different options to choose from. They always had answers when my wife and I had questions or they’ll redirect us to the right people or team to ensure we were receiving the appropriate information. We never felt rushed or lost throughout the whole process. Instead they made the journey fun, enjoyable, and exciting as it should be when purchasing a house! Thanks to Antonio and Kim’s patience, guidance, and expertise, I know my wife and I made the right decision for our family and future. I highly recommend them to anyone!",
    name: "Michael Chan",
    context: "Family home",
  },
  {
    quote:
      "I had an amazing experience working with Antonio and his team! They both have helped my partner and I find a pre-construction that fit our needs perfectly! Both of them were extremely well informed and helpful throughout this process!",
    name: "Angela Luu",
    context: "Pre-construction",
  },
  {
    quote:
      "Antonio and Kim were extremely helpful and knowledgeable of the pre-construction real estate projects that we were interested in and helped us lock down on a property that met our needs. It was a very smooth process, helped by the fact that they walked us through step-by-step what we needed. Would highly recommend them to anyone looking to purchase a home!",
    name: "Kevin Tieu",
    context: "Pre-construction",
  },
];
