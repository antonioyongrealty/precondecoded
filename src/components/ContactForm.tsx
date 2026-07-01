import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, User, Send, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your name" })
    .max(100, { message: "Name must be under 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email" })
    .max(255, { message: "Email must be under 255 characters" }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Phone must be under 30 characters" })
    .optional(),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Please enter a message" })
    .max(2000, { message: "Message must be under 2000 characters" }),
});

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      message: parsed.data.message,
    });

    // Fire-and-forget email notification (works once sender domain is verified)
    try {
      await fetch("/api/public/contact-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
    } catch {
      // Email delivery is best-effort; the lead is already saved.
    }

    setSubmitting(false);

    if (error) {
      toast.error("Something went wrong. Please try again or email us directly.");
      return;
    }

    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    toast.success("Thanks! We'll be in touch soon.");
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border bg-card p-10 text-center shadow-[var(--shadow-card)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent text-primary-foreground">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold">Message sent</h3>
        <p className="mt-3 max-w-sm text-muted-foreground">
          Thanks for reaching out. We'll get back to you shortly to talk through
          your goals and the rebate you may qualify for.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border bg-card p-8 shadow-[var(--shadow-card)] md:p-10"
    >
      <h3 className="text-2xl font-semibold">Send us a message</h3>
      <p className="mt-2 text-muted-foreground">
        Tell us a bit about what you're looking for and we'll be in touch.
      </p>

      <div className="mt-8 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <div className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="name"
              value={form.name}
              onChange={update("name")}
              placeholder="Jane Doe"
              className="pl-9"
              maxLength={100}
            />
          </div>
          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="you@example.com"
              className="pl-9"
              maxLength={255}
            />
          </div>
          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone <span className="text-muted-foreground">(optional)</span>
          </Label>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={update("phone")}
              placeholder="(647) 000-0000"
              className="pl-9"
              maxLength={30}
            />
          </div>
          {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">How can we help?</Label>
          <Textarea
            id="message"
            value={form.message}
            onChange={update("message")}
            placeholder="I'm looking to buy my first home and want to learn about the rebate..."
            className="min-h-[120px]"
            maxLength={2000}
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="accent"
          size="lg"
          className="w-full"
          disabled={submitting}
        >
          {submitting ? "Sending..." : (<><Send className="h-4 w-4" /> Send message</>)}
        </Button>
      </div>
    </form>
  );
}
