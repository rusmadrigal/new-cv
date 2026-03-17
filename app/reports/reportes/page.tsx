import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session-reports";
import { getMonthlyReportsByClientId } from "@/lib/sanity-reports";
import { FileText } from "lucide-react";

function formatMonth(month: string) {
  const [y, m] = month.split("-");
  const date = new Date(Number(y), Number(m) - 1);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default async function ReportesListPage() {
  const session = await getSession();
  if (!session) redirect("/reports/login");

  const reports = await getMonthlyReportsByClientId(session.clientId);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium">Monthly reports</h1>
      {reports.length === 0 ? (
        <p className="text-[var(--muted-foreground)]">
          No reports published yet.
        </p>
      ) : (
        <ul className="space-y-3">
          {reports.map((report) => (
            <li key={report._id}>
              <Link
                href={`/reports/reportes/${report._id}`}
                className="flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 transition hover:border-[var(--muted)]"
              >
                <FileText className="h-5 w-5 text-[var(--muted-foreground)]" />
                <div className="min-w-0 flex-1">
                  <span className="font-medium">{report.title}</span>
                  <span className="ml-2 text-sm text-[var(--muted-foreground)]">
                    {formatMonth(report.month)}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
