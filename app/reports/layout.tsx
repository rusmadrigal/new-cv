import Link from "next/link";
import { getSession } from "@/lib/session-reports";
import { logout } from "./actions";

export const metadata = {
  title: "Reports",
  description: "Monthly reports and SEO work",
};

export default async function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  // Layout is only rendered for protected routes; login has its own layout
  const isLogin = false;

  return (
    <div className="min-h-screen bg-black text-white">
      {!isLogin && session && (
        <header className="border-b border-[var(--border)] sticky top-0 z-10 bg-black/90 backdrop-blur">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <nav className="flex items-center gap-6">
              <Link
                href="/reports"
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--muted-foreground)]"
              >
                Home
              </Link>
              <Link
                href="/reports/reportes"
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--muted-foreground)]"
              >
                Monthly reports
              </Link>
              <Link
                href="/reports/trabajos"
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--muted-foreground)]"
              >
                SEO work
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[var(--muted-foreground)]">
                {session.email}
              </span>
              <form action={logout}>
                <button
                  type="submit"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </header>
      )}
      <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
