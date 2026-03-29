import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX = {
  name: 200,
  email: 254,
  company: 200,
  message: 8000,
} as const;

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

/**
 * Reduce envíos directos al endpoint (curl/scripts) sin Origin del sitio.
 * En desarrollo no se exige; el formulario en el navegador envía Origin en same-origin fetch.
 */
function isAllowedRequestOrigin(req: NextRequest): boolean {
  if (process.env.NODE_ENV === "development") return true;
  if (process.env.CONTACT_SKIP_ORIGIN_CHECK === "true") return true;

  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return true;

  let expectedHost: string;
  try {
    expectedHost = new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    return true;
  }

  for (const header of [
    req.headers.get("origin"),
    req.headers.get("referer"),
  ]) {
    if (!header) continue;
    try {
      const host = new URL(header).hostname.replace(/^www\./, "");
      if (host === expectedHost) return true;
    } catch {
      continue;
    }
  }

  return false;
}

function clip(s: string, max: number): string {
  return s.length <= max ? s : s.slice(0, max);
}

export async function POST(req: NextRequest) {
  try {
    if (!isAllowedRequestOrigin(req)) {
      return NextResponse.json(
        { ok: false, error: "forbidden" },
        { status: 403 },
      );
    }

    const body = await req.json();

    /** Honeypot — bots often fill hidden fields */
    const hp = body._hp;
    if (typeof hp === "string" && hp.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const name = clip(String(body.name ?? "").trim(), MAX.name);
    const email = clip(String(body.email ?? "").trim(), MAX.email);
    const company = clip(String(body.company ?? "").trim(), MAX.company);
    const message = clip(String(body.message ?? "").trim(), MAX.message);

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
