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
      "Antonio Yong and PreCon Decoded: a pre-construction only practice in the GTA built on VIP access, plain English agreements, and a rebate of up to $25,000.";
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
    title: "Pre-con only",
    body: "Resale agents dabble in pre-construction. We live in it, which is why we can tell you when a price list is out of step with the neighbourhood.",
  },
  {
    title: "The rebate is in writing",
    body: "Before you sign a worksheet you get the rebate amount, the conditions, and when it is paid. No moving targets at closing.",
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
          Pre-construction, without the guesswork
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            PreCon Decoded started with a simple frustration. Buyers were walking into sales centres
            with a floor plan, a deposit cheque and no way to judge whether the price made sense.
            We didn't want that to happen to anyone else.
          </p>
          <p>
            PreCon Decoded was built on a simple idea: buyers deserve to understand exactly what
            they're getting into — the contract, the risks, the true cost — before they sign
            anything. No pressure, no sales scripts, no hiding behind jargon.
          </p>
          <p>
            It's why we're upfront about our fees. It's why we walk clients through the fine print
            builders hope they'll skip. And it's why we see ourselves less as salespeople and more
            as a check against an industry that too often profits from confusion.
          </p>
          <p>
            This is a movement toward lower fees and real transparency in pre-construction real
            estate — one buyer at a time.
          </p>
          <p>
            I am Antonio Yong, a licensed realtor in the Greater Toronto Area. We specialize in
            pre-construction: VIP access on GTA pre-construction homes, worksheet strategy, and the
            agreement review that happens inside the ten day cooling off period.
          </p>
          <p>
            The rebate is part of the same idea. The builder pays us the commission. We share half
            of it with you — 1.25% of the purchase price, up to $25,000, paid one month after your
            pre-con closes.
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
            Fifteen minutes is enough to know whether pre-con fits your plan.
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
