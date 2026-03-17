"use server";

import { redirect } from "next/navigation";
import { getClientByEmail } from "@/lib/sanity-reports";
import {
  createSession,
  setSessionCookie,
  deleteSessionCookie,
} from "@/lib/session-reports";

export async function login(formData: FormData) {
  const email = (formData.get("email") as string)?.trim();
  const password = (formData.get("password") as string)?.trim() ?? "";

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const client = await getClientByEmail(email);
  if (!client) {
    return { error: "Invalid credentials." };
  }

  if (!client.password || client.password.trim() === "") {
    return { error: "Account has no password set. Contact the administrator." };
  }

  const valid = password === client.password.trim();
  if (!valid) {
    return { error: "Invalid credentials." };
  }

  const token = await createSession({
    clientId: client._id,
    email: client.email,
  });
  await setSessionCookie(token);
  redirect("/reports");
}

export async function logout() {
  await deleteSessionCookie();
  redirect("/reports/login");
}
