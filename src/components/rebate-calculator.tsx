import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EMAIL } from "@/data/site";

const REBATE_RATE = 0.0125;
const REBATE_CAP = 25000;

const currency = (n: number) =>
  n.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });

export function RebateCalculator() {
  const [price, setPrice] = useState(750000);
  const raw = price * REBATE_RATE;
  const rebate = Math.min(raw, REBATE_CAP);
  const capped = raw > REBATE_CAP;

  return (
    <div className="grid gap-8 rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] md:grid-cols-2 md:p-10">
      <div>
        <label htmlFor="price" className="text-sm font-medium text-muted-foreground">
          Purchase price
        </label>
        <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3">
          <span className="text-lg text-muted-foreground">$</span>
          <input
            id="price"
            type="number"
            min={200000}
            max={4000000}
            step={5000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value) || 0)}
            className="w-full bg-transparent font-display text-2xl font-semibold outline-none"
          />
        </div>
        <input
          aria-label="Purchase price slider"
          type="range"
          min={300000}
          max={3000000}
          step={5000}
          value={Math.min(Math.max(price, 300000), 3000000)}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="mt-5 w-full accent-[var(--accent)]"
        />
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>$300K</span>
          <span>$3M</span>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          The rebate is 1.25% of the purchase price, up to $25,000, credited to you on closing. It
          comes out of the commission the builder already pays, so it does not raise your price.
        </p>
      </div>

      <div className="flex flex-col justify-between rounded-2xl bg-gradient-accent p-7 text-accent-foreground">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest opacity-80">
            Your cash back
          </p>
          <p className="mt-3 font-display text-5xl font-bold md:text-6xl">{currency(rebate)}</p>
          <p className="mt-3 text-sm opacity-85">
            {capped
              ? "Capped at the $25,000 maximum rebate."
              : `1.25% of ${currency(price)} on closing.`}
          </p>
          <ul className="mt-6 space-y-1.5 text-sm opacity-90">
            <li>Covers land transfer tax on most GTA purchases</li>
            <li>Or your first year of maintenance fees, and then some</li>
          </ul>
        </div>
        <Button asChild size="lg" variant="default" className="mt-8 w-full">
          <a
            href={`mailto:${EMAIL}?subject=Rebate%20estimate%20for%20${encodeURIComponent(currency(price))}`}
          >
            Confirm my rebate <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
