import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV, ONBOARDING_FORM } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-accent font-display text-lg font-bold text-accent-foreground">
            P
          </span>
          <span className="font-display text-lg font-bold tracking-tight">PreCon Decoded</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/about"
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
            <a href={ONBOARDING_FORM} target="_blank" rel="noreferrer">
              Get started
            </a>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-6 py-4 text-sm lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <Link to="/about" onClick={() => setOpen(false)}>
              About Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
