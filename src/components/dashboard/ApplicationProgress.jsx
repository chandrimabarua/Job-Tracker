import { CheckCircle2 } from "lucide-react";

function ApplicationProgress({ applications }) {
  const statuses = ["Applied", "In Progress", "Interview", "Offer"];

  return (
    <div className="glass rounded-2xl p-5">
      <div>
        <h3 className="font-semibold">Application progress</h3>

        <p className="mt-1 text-xs text-text-muted">Track your pipeline</p>
      </div>

      <div className="mt-6 space-y-5">
        {statuses.map((status) => {
          const count = applications.filter(
            (item) => item.status === status,
          ).length;

          const total = applications.length || 1;
          const width = Math.round((count / total) * 100);

          return (
            <div key={status}>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-primary" />
                  <span className="text-xs">{status}</span>
                </div>

                <span className="text-xs text-text-muted">{count}</span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700"
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ApplicationProgress;
