import { createFileRoute } from "@tanstack/react-router";
import {
  BadgePercent,
  Compass,
  TrendingUp,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PreCon Decoded | Modern Real Estate with Up to 1.25% Rebate" },
      {
        name: "description",
        content:
          "PreCon Decoded makes buying real estate simple and rewarding — up to 1.25% rebate, honest data-driven guidance, and 7+ years of proven experience.",
      },
      { property: "og:title", content: "PreCon Decoded | Modern Real Estate" },
      {
        property: "og:description",
        content:
          "Buy real estate simply and rewardingly — up to 1.25% rebate, honest advice, and $25M+ in transactions.",
      },
      { property: "og:image", content: heroImage },
      { property: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const EMAIL = "antonioyong.realty@gmail.com";
const PHONE_DISPLAY = "(647) 855-1557";
const PHONE_TEL = "+16478551557";

const features = [
  {
    icon: BadgePercent,
    title: "Modern Fees",
    description:
      "Get up to a 1.25% rebate on eligible home purchases. Keep more of your money where it belongs — with you.",
  },
  {
    icon: Compass,
    title: "Expert Guidance",
    description:
      "We help you navigate every step of your real estate journey with honest, data-driven advice you can trust.",
  },
  {
    icon: TrendingUp,
    title: "Proven Experience",
    description:
      "With 7+ years as a realtor and $25M+ in transactions, we're dedicated to helping you decide with confidence.",
  },
];

const stats = [
  { value: "1.25%", label: "Rebate on eligible purchases" },
  { value: "7+", label: "Years as a realtor" },
  { value: "$25M+", label: "In transactions closed" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern glass condo towers rising into a clear blue sky"
            width={1600}
            height={1100}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur">
              <BadgePercent className="h-4 w-4" /> Up to 1.25% rebate
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl">
              Real estate, made simple and rewarding.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 md:text-xl">
              At PreCon Decoded, we cut the noise with honest, data-driven advice
              and modern fees — so you can buy your next home with total
              confidence.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="accent">
                <a href={`mailto:${EMAIL}`}>
                  Get started <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="heroOutline">
                <a href="#how">How it works</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why PreCon Decoded
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need to buy smarter
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-2xl border bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-muted-foreground">{f.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold tracking-tight md:text-5xl">
                {s.value}
              </div>
              <p className="mt-2 text-primary-foreground/75">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            About us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Confident decisions, backed by real data
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Buying real estate shouldn't feel like decoding a foreign language.
            We bring clarity, transparency, and modern fees to every transaction
            — guiding you with the same honesty we'd want for our own families.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Up to 1.25% rebate on eligible home purchases",
              "Honest, data-driven advice at every step",
              "7+ years of experience and $25M+ closed",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border bg-card p-10 shadow-[var(--shadow-card)]">
          <h3 className="text-2xl font-semibold">Ready when you are</h3>
          <p className="mt-3 text-muted-foreground">
            Reach out for a no-pressure conversation about your goals. We'll walk
            you through your options and the rebate you may qualify for.
          </p>
          <div className="mt-8 space-y-3">
            <Button asChild size="lg" variant="accent" className="w-full">
              <a href={`mailto:${EMAIL}`}>
                <Mail className="h-4 w-4" /> {EMAIL}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <a href={`tel:${PHONE_TEL}`}>
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-hero px-8 py-16 text-center text-primary-foreground md:px-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Let's decode your next move
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Simple, rewarding real estate is one message away.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="accent">
              <a href={`mailto:${EMAIL}`}>
                <Mail className="h-4 w-4" /> Email us
              </a>
            </Button>
            <Button asChild size="lg" variant="heroOutline">
              <a href={`tel:${PHONE_TEL}`}>
                <Phone className="h-4 w-4" /> Call us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-accent font-display text-lg font-bold text-primary-foreground">
            P
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            PreCon Decoded
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#how" className="text-muted-foreground transition-colors hover:text-foreground">
            Why us
          </a>
          <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
        <Button asChild variant="accent" size="sm">
          <a href={`mailto:${EMAIL}`}>Get started</a>
        </Button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <span className="font-display font-semibold text-foreground">
          PreCon Decoded
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-foreground">
            {EMAIL}
          </a>
          <a href={`tel:${PHONE_TEL}`} className="transition-colors hover:text-foreground">
            {PHONE_DISPLAY}
          </a>
        </div>
        <span>© {new Date().getFullYear()} PreCon Decoded</span>
      </div>
    </footer>
  );
}
