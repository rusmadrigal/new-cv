"use client";

import { useActionState } from "react";
import Link from "next/link";
import { login } from "../actions";

export default function ReportsLoginPage() {
  const [state, formAction] = useActionState(
    async (_: unknown, formData: FormData) => {
      return login(formData);
    },
    null as { error?: string } | null
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <div className="w-full max-w-sm rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg">
        <h1 className="text-xl font-medium text-center mb-2">
          Reports access
        </h1>
        <p className="text-sm text-[var(--muted-foreground)] text-center mb-6">
          Enter your email and password
        </p>
        <form action={formData => formAction(formData)} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--foreground)] mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[rgb(96,165,250)]"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[var(--foreground)] mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[rgb(96,165,250)]"
            />
          </div>
          {state?.error && (
            <p className="text-sm text-red-400" role="alert">
              {state.error}
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-md bg-[var(--primary)] text-[var(--primary-foreground)] py-2 px-4 font-medium hover:opacity-90 transition-opacity"
          >
            Sign in
          </button>
        </form>
      </div>
      <Link
        href="/"
        className="mt-6 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
      >
        Back to site
      </Link>
    </div>
  );
}
