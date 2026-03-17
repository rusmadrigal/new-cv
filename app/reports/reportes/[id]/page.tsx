import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { getSession } from "@/lib/session-reports";
import { getMonthlyReportById } from "@/lib/sanity-reports";
import { PortableText } from "@portabletext/react";

function formatMonth(month: string) {
  const [y, m] = month.split("-");
  const date = new Date(Number(y), Number(m) - 1);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default async function ReportDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/reports/login");

  const { id } = await params;
  const report = await getMonthlyReportById(id, session.clientId);
  if (!report) notFound();

  return (
    <div className="space-y-6">
      <Link
        href="/reports/reportes"
        className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
      >
        ← Back to reports
      </Link>
      <article className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
        <h1 className="text-2xl font-medium">{report.title}</h1>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          {formatMonth(report.month)}
        </p>
        {report.fileUrl && (
          <a
            href={report.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-[var(--primary-foreground)] hover:opacity-90"
          >
            View / Download file
          </a>
        )}
        {report.content && report.content.length > 0 && (
          <div className="mt-6 prose prose-invert prose-sm max-w-none">
            <PortableText value={report.content} />
          </div>
        )}
      </article>
    </div>
  );
}
