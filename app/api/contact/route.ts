import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    /** Honeypot — bots often fill hidden fields */
    const hp = body._hp;
    if (typeof hp === "string" && hp.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "required" },
        { status: 400 },
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "email" }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL ?? "hello@rusmadrigal.com";
    const key = process.env.RESEND_API_KEY;

    if (key) {
      const resend = new Resend(key);
      const from =
        process.env.RESEND_FROM ?? "Rusben CV <onboarding@resend.dev>";
      const { error } = await resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: `[SEO Lead] ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nWebsite / Company: ${company || "—"}\n\nMessage:\n${message || "—"}`,
      });
      if (error) {
        console.error("[contact] Resend:", error);
        return NextResponse.json({ ok: false, error: "send" }, { status: 502 });
      }
    } else {
      console.log("[contact] RESEND_API_KEY not set — log only:", {
        name,
        email,
        company,
        message,
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "parse" }, { status: 400 });
  }
}
