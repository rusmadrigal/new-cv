import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/session-reports";
import {
  getMonthlyReportsByClientId,
  getSeoTasksByClientId,
} from "@/lib/sanity-reports";

export default async function ReportsHomePage() {
  const session = await getSession();
  if (!session) redirect("/reports/login");

  const [reports, tasks] = await Promise.all([
    getMonthlyReportsByClientId(session.clientId),
    getSeoTasksByClientId(session.clientId),
  ]);
  const inProgress = tasks.filter((t) => t.status === "in_progress");
  const completed = tasks.filter((t) => t.status === "completed");

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-medium">Reports dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        <Link
          href="/reports/reportes"
          className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 transition hover:border-[var(--muted)]"
        >
          <h2 className="text-lg font-medium mb-1">Monthly reports</h2>
          <p className="text-sm text-[var(--muted-foreground)]">
            {reports.length} report{reports.length !== 1 ? "s" : ""} available
          </p>
        </Link>
        <Link
          href="/reports/trabajos"
          className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 transition hover:border-[var(--muted)]"
        >
          <h2 className="text-lg font-medium mb-1">SEO work</h2>
          <p className="text-sm text-[var(--muted-foreground)]">
            {inProgress.length} in progress, {completed.length} completed
          </p>
        </Link>
      </div>
    </div>
  );
}
