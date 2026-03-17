import { SignJWT } from "jose/jwt/sign";
import { jwtVerify } from "jose/jwt/verify";
import { cookies } from "next/headers";

const COOKIE_NAME = "reports_session";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

const DEV_FALLBACK_SECRET =
  "reports-dev-secret-min-32-chars-do-not-use-in-production";

function getSecret(): Uint8Array {
  const secret =
    process.env.REPORTS_SESSION_SECRET ||
    (process.env.NODE_ENV === "development" ? DEV_FALLBACK_SECRET : "");
  if (!secret || secret.length < 32) {
    throw new Error(
      "REPORTS_SESSION_SECRET must be set and at least 32 characters (e.g. openssl rand -base64 32)"
    );
  }
  return new TextEncoder().encode(secret);
}

export interface ReportsSession {
  clientId: string;
  email: string;
}

export async function createSession(payload: ReportsSession): Promise<string> {
  const token = await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(`${MAX_AGE}s`)
    .setIssuedAt()
    .sign(getSecret());
  return token;
}

export async function verifySessionToken(
  token: string
): Promise<ReportsSession | null> {
  try {
    const secret = getSecret();
    const { payload } = await jwtVerify(token, secret);
    const clientId = payload.clientId as string;
    const email = payload.email as string;
    if (!clientId || !email) return null;
    return { clientId, email };
  } catch {
    return null;
  }
}

export async function getSession(): Promise<ReportsSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/reports",
    maxAge: MAX_AGE,
  });
}

export async function deleteSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export { COOKIE_NAME };
