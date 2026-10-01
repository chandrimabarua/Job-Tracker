import {
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Trophy,
} from "lucide-react";

import useApplications from "../hooks/useApplications";

function Analytics() {
  const { applications } = useApplications();

  const total = applications.length || 1;

  const statuses = [
    {
      name: "Applied",
      icon: BriefcaseBusiness,
      color: "bg-blue-500",
    },
    {
      name: "In Progress",
      icon: Clock3,
      color: "bg-amber-500",
    },
    {
      name: "Interview",
      icon: CheckCircle2,
      color: "bg-purple-500",
    },
    {
      name: "Offer",
      icon: Trophy,
      color: "bg-emerald-500",
    },
    {
      name: "Rejected",
      icon: BarChart3,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="mx-auto max-w-[1200px] space-y-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-primary">
          Insights
        </p>

        <h1 className="mt-1 text-2xl font-semibold">Analytics</h1>

        <p className="mt-1 text-sm text-text-muted">
          Understand your job application pipeline.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="glass rounded-2xl p-5">
          <p className="text-xs text-text-muted">Total applications</p>
          <p className="mt-2 text-3xl font-semibold">{applications.length}</p>
        </div>

        <div className="glass rounded-2xl p-5">
          <p className="text-xs text-text-muted">Interviews</p>
          <p className="mt-2 text-3xl font-semibold">
            {applications.filter((a) => a.status === "Interview").length}
          </p>
        </div>

        <div className="glass rounded-2xl p-5">
          <p className="text-xs text-text-muted">Offers</p>
          <p className="mt-2 text-3xl font-semibold">
            {applications.filter((a) => a.status === "Offer").length}
          </p>
        </div>
      </div>

      <div className="glass rounded-2xl p-6">
        <div>
          <h2 className="font-semibold">Application breakdown</h2>

          <p className="mt-1 text-xs text-text-muted">
            Current distribution by status
          </p>
        </div>

        <div className="mt-7 space-y-6">
          {statuses.map((item) => {
            const count = applications.filter(
              (application) => application.status === item.name,
            ).length;

            const percentage = Math.round((count / total) * 100);

            const Icon = item.icon;

            return (
              <div key={item.name}>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon size={16} className="text-text-muted" />

                    <span className="text-sm">{item.name}</span>
                  </div>

                  <span className="text-xs text-text-muted">
                    {count} · {percentage}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all duration-700`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
