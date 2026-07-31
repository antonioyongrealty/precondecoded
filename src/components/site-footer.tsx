import { Link } from "@tanstack/react-router";
import { EMAIL, GOOGLE_PROFILE, PHONE_DISPLAY, PHONE_TEL } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-sm text-muted-foreground md:grid-cols-3">
        <div>
          <span className="font-display text-base font-semibold text-foreground">
            PreCon Decoded
          </span>
          <p className="mt-3 max-w-xs">
            VIP pre-construction access in the GTA, with up to $25,000 of the commission handed
            back to you on closing.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium text-foreground">Explore</span>
          <a href="/#projects" className="transition-colors hover:text-foreground">
            Projects
          </a>
          <a href="/#rebate-calculator" className="transition-colors hover:text-foreground">
            Rebate Calculator
          </a>
          <a href="/#how-it-works" className="transition-colors hover:text-foreground">
            How It Works
          </a>
          <Link to="/about" className="transition-colors hover:text-foreground">
            About Us
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium text-foreground">Contact</span>
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-foreground">
            {EMAIL}
          </a>
          <a href={`tel:${PHONE_TEL}`} className="transition-colors hover:text-foreground">
            {PHONE_DISPLAY}
          </a>
          <a
            href={GOOGLE_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Google Business Profile
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} PreCon Decoded. Rebate amounts vary by builder commission and
        are paid on closing. Not intended to solicit buyers or sellers under contract.
      </div>
    </footer>
  );
}
