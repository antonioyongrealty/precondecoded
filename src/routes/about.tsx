import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EMAIL, GOOGLE_PROFILE, PHONE_DISPLAY, PHONE_TEL } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => {
    const title = "About Us | PreCon Decoded";
    const description =
      "Antonio Yong and PreCon Decoded: a pre-construction specialization in the GTA built on VIP access, plain English agreements, and up to $25,000 rebated to you.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: "https://precondecoded.lovable.app/about" },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: "https://precondecoded.lovable.app/about" }],
    };
  },
  component: About,
});

const principles = [
  {
    title: "Pre-con specialization",
    body: "Resale agents dabble in pre-construction. We specialize in it, which is why we can tell you when a price list is out of step with the neighbourhood.",
  },
  {
    title: "The rebate is in writing",
    body: "Before you sign a worksheet you get the rebate amount, the conditions, and when it is paid — one month after closing. No moving targets.",
  },
  {
    title: "We will talk you out of a bad deal",
    body: "Some launches are not worth the deposit. Saying so costs us a commission and keeps you out of a unit you cannot sell.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">About Us</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          PreCon Decoded was born out of frustration.
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            In 2022, at the peak of the GTA real estate market, Kim bought her condo. She trusted
            her real estate agent to look out for her. Instead, she ended up with buyer's regret.
            The offer went in without any conditions to protect her, and she overpaid for it.
          </p>
          <p>
            Antonio met Kim a couple months later. Hearing what she'd been through confirmed exactly
            why he'd gotten into this business. It's the reason PreCon Decoded exists today. No
            buyer should have to learn the hard way that not every agent has their back.
          </p>
          <p>
            Antonio has closed more than $30M in real estate transactions and built PreCon Decoded
            around a single specialty: pre-construction. Over the years he's built direct
            relationships with builders across the GTA, earning VIP access to inventory on most major
            projects long before the general public ever sees it.
          </p>
          <p>
            We built PreCon Decoded around what Kim didn't get: real protection, real transparency,
            and real advocacy. That means VIP access to inventory, commission rebates up to 1.25%,
            and straight, no jargon answers on the things that actually matter. Conditions that
            protect you. Tarion warranty coverage. HST rebates. Bank appraisals. Development charge
            caps.
          </p>
          <p>
            We don't want anyone to go through what Kim did. That's our promise: modern fees,
            transparent service, and an agent who's actually on your side.
          </p>
        </div>


        <div className="mt-14 grid gap-5">
          {principles.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-7">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-card p-9 shadow-[var(--shadow-card)]">
          <h2 className="text-2xl font-semibold">Let's talk</h2>
          <p className="mt-3 text-muted-foreground">
            Twenty-five minutes is enough to know whether pre-con fits your plan.
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
            <Button asChild size="lg" variant="ghost" className="w-full">
              <a href={GOOGLE_PROFILE} target="_blank" rel="noreferrer">
                <Star className="h-4 w-4" /> See our Google reviews
              </a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
