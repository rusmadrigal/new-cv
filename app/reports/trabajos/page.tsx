import { redirect } from "next/navigation";
import { getSession } from "@/lib/session-reports";
import { getSeoTasksByClientId } from "@/lib/sanity-reports";
import { CheckCircle2, Loader2 } from "lucide-react";

function formatDate(iso: string | null) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function TrabajosPage() {
  const session = await getSession();
  if (!session) redirect("/reports/login");

  const tasks = await getSeoTasksByClientId(session.clientId);
  const inProgress = tasks.filter((t) => t.status === "in_progress");
  const completed = tasks.filter((t) => t.status === "completed");

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-medium">SEO work</h1>

      <section>
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
          <Loader2 className="h-5 w-5 text-amber-400" />
          In progress
        </h2>
        {inProgress.length === 0 ? (
          <p className="text-[var(--muted-foreground)]">
            No tasks in progress.
          </p>
        ) : (
          <ul className="space-y-3">
            {inProgress.map((task) => (
              <li
                key={task._id}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4"
              >
                <span className="font-medium">{task.title}</span>
                {task.description && (
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                    {task.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          Completed
        </h2>
        {completed.length === 0 ? (
          <p className="text-[var(--muted-foreground)]">
            No completed tasks yet.
          </p>
        ) : (
          <ul className="space-y-3">
            {completed.map((task) => (
              <li
                key={task._id}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4"
              >
                <span className="font-medium">{task.title}</span>
                {task.description && (
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                    {task.description}
                  </p>
                )}
                {task.completedAt && (
                  <p className="mt-2 text-xs text-[var(--muted-foreground)]">
                    Completed: {formatDate(task.completedAt)}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
