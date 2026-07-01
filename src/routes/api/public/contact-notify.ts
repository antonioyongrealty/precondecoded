import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const payloadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().min(1).max(2000),
});

const OWNER_EMAIL = "antonioyong.realty@gmail.com";

export const Route = createFileRoute("/api/public/contact-notify")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid body" }, { status: 400 });
        }

        const parsed = payloadSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ error: "Invalid input" }, { status: 400 });
        }

        const { name, email, phone, message } = parsed.data;

        const senderDomain = process.env.SENDER_DOMAIN;
        const apiKey = process.env.LOVABLE_API_KEY;

        // Email delivery is best-effort. If email infrastructure isn't
        // configured yet, the lead is still saved client-side to the database.
        if (!senderDomain || !apiKey) {
          return Response.json({ ok: true, emailed: false });
        }

        try {
          const res = await fetch(
            `https://${senderDomain}/lovable/email/transactional/send`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
              },
              body: JSON.stringify({
                templateName: "lead-notification",
                recipientEmail: OWNER_EMAIL,
                templateData: { name, email, phone: phone ?? "", message },
              }),
            },
          );
          return Response.json({ ok: true, emailed: res.ok });
        } catch {
          return Response.json({ ok: true, emailed: false });
        }
      },
    },
  },
});
