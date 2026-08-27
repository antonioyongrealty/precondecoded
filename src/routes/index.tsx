import { createFileRoute, Link } from "@tanstack/react-router";
import { getRequestOrigin } from "@/lib/origin.functions";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  FileSearch,
  KeyRound,
  Mail,
  MapPin,
  Phone,
  Star,
  Ticket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RebateCalculator } from "@/components/rebate-calculator";
import {
  EMAIL,
  GOOGLE_PROFILE,
  ONBOARDING_FORM,
  PHONE_DISPLAY,
  PHONE_TEL,
  projects,
  reviews,
} from "@/data/site";
import heroImage from "@/assets/hero-precon.jpg";

export const Route = createFileRoute("/")({
  loader: async () => {
    const origin = await getRequestOrigin();
    return { origin };
  },
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "https://precondecoded.lovable.app";
    const imageUrl = `${origin}/og-image.png`;
    const title = "PreCon Decoded | VIP Pre-Construction Access + Up to $25K Rebate";
    const description =
      "VIP access to GTA pre-construction homes, with up to $25,000 rebated to you — half of the commission the builder pays us, shared with you.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: origin },
        { property: "og:image", content: imageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: imageUrl },
      ],
      links: [{ rel: "canonical", href: `${origin}/` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "PreCon Decoded",
            email: EMAIL,
            telephone: PHONE_TEL,
            areaServed: "Greater Toronto Area",
            sameAs: [GOOGLE_PROFILE],
            description,
          }),
        },
      ],
    };
  },
  component: Index,
});

const valueProps = [
  {
    icon: Ticket,
    title: "VIP access, not the sales centre",
    body: "You'll see floor plans, price lists and incentives in the VIP window, before units reach the public. That is where the best exposures and the softest deposit structures go.",
  },
  {
    icon: BadgeDollarSign,
    title: "Up to $25,000 rebate to you",
    body: "The builder pays us the commission. We share half of it with you, up to $25,000.",
  },
  {
    icon: FileSearch,
    title: "Your pre-con guide",
    body: "No pressure approach, just sharing information and data so you can make an informed decision: occupancy fees, development charge caps, assignment rights, HST rebate eligibility.",
  },
];

const steps = [
  {
    icon: CalendarClock,
    title: "1. Book a 25 minute call",
    body: "Schedule a call and fill out the short onboarding form.",
  },
  {
    icon: MapPin,
    title: "2. Onboarding call",
    body: "We walk through the process, your criteria and the next steps.",
  },
  {
    icon: Building2,
    title: "3. Matched pre-cons",
    body: "We do the work on our end and send you projects that meet your criteria.",
  },
  {
    icon: FileSearch,
    title: "4. Buy the right one",
    body: "We submit your worksheet in the VIP window and negotiate the incentives available on your unit.",
  },
  {
    icon: BadgeDollarSign,
    title: "5. Rebate shared",
    body: "The builder pays us one month after your pre-con closes. That is when we share half our commission with you, up to $25,000.",
  },
  {
    icon: KeyRound,
    title: "6. Move in",
    body: "Keys in hand, and your rebate in the bank.",
  },
];


function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Pre-construction condo towers lit at night in the Greater Toronto Area"
            width={1600}
            height={1100}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <Ticket className="h-4 w-4" /> VIP pre-construction access, GTA
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Buy pre-con with VIP access and{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                up to $25K rebate to you
              </span>
              .
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              We specialize in pre-construction. We share VIP access on GTA pre-construction homes
              with you, we share up to $25K commission rebate with you, and we serve as your guide
              in pre-cons.
            </p>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Half of our commission shared with you.
            </p>


            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="accent">
                <a href={ONBOARDING_FORM} target="_blank" rel="noreferrer">
                  Start your onboarding <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#projects">See current projects</a>
              </Button>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ["1.25%", "Rebated to you"],
                ["$25K", "Maximum rebate to you"],
                ["Pre-con", "Our specialization"],
                ["GTA", "Where we work"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-border/70 bg-card/60 p-4 backdrop-blur">
                  <dt className="font-display text-2xl font-bold text-accent">{value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section id="why-precon-decoded" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why PreCon Decoded
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Specialists, not generalists, and we pay you to work with us
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {valueProps.map((v) => (
            <article
              key={v.title}
              className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--glow-accent)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="border-y border-border/60 bg-card/30 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Reviews</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">What clients say</h2>
            </div>
            <Button asChild variant="outline">
              <a href={GOOGLE_PROFILE} target="_blank" rel="noreferrer">
                <Star className="h-4 w-4" /> Read all 12 reviews on Google
              </a>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name + r.context} className="rounded-2xl border border-border bg-card p-7">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm font-medium">
                  {r.name}
                  <span className="block text-xs font-normal text-muted-foreground">
                    {r.context}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            12 verified reviews live on our Google Business Profile.
          </p>

        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="border-y border-border/60 bg-card/30 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Projects
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Current GTA allocations</h2>
              <p className="mt-3 text-muted-foreground">
                A sample of what we track. The live list, price sheets and floor plans go out by
                email as allocations open.
              </p>
            </div>
            <Button asChild variant="accent">
              <a href={ONBOARDING_FORM} target="_blank" rel="noreferrer">
                Get the full list
              </a>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--glow-accent)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.area}</p>
                  </div>
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {p.status}
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 border-y border-border/70 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">From</p>
                    <p className="font-display text-lg font-semibold">{p.priceFrom}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Occupancy
                    </p>
                    <p className="font-display text-lg font-semibold">{p.occupancy}</p>
                  </div>
                </div>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-lg bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                <Button asChild variant="outline" className="mt-6 w-full">
                  <a href={ONBOARDING_FORM} target="_blank" rel="noreferrer">
                    Request floor plans and pricing
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rebate calculator */}
      <section id="rebate-calculator" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Rebate Calculator
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">See your rebate before you buy</h2>
        </div>
        <div className="mt-10">
          <RebateCalculator />
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-border/60 bg-card/30 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Six steps, no sales centre spin</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {steps.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <s.icon className="h-5 w-5 text-accent" />
                <h3 className="mt-5 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" variant="accent">
              <a href={ONBOARDING_FORM} target="_blank" rel="noreferrer">
                Start your onboarding <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">Takes about 3 minutes.</p>
          </div>
        </div>
      </section>




      {/* Guide / about teaser */}
      <section id="your-guide" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Your Guide
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Your pre-con guide, start to close
            </h2>
            <p className="mt-4 text-muted-foreground">
              I am Antonio Yong. No pressure approach, just sharing information and data so you can
              make an informed decision: builder due diligence, unit selection, the agreement
              review, and the rebate in writing before you sign anything.
            </p>

            <Button asChild variant="accent" className="mt-7">
              <Link to="/about">
                Read the full story <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-3xl border border-border bg-card p-9 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-semibold">Start with a 25 minute call</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              No obligation. Bring your budget and timeline, leave with a shortlist and a rebate
              number.
            </p>
            <div className="mt-7 space-y-3">
              <Button asChild size="lg" variant="accent" className="w-full">
                <a href={`tel:${PHONE_TEL}`}>
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="h-4 w-4" /> {EMAIL}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
