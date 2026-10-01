import { useMemo } from "react";

import ApplicationCard from "../components/applications/ApplicationCard";
import useApplications from "../hooks/useApplications";

const columns = [
  {
    title: "Applied",
    color: "border-blue-500/20",
  },
  {
    title: "In Progress",
    color: "border-amber-500/20",
  },
  {
    title: "Interview",
    color: "border-purple-500/20",
  },
  {
    title: "Offer",
    color: "border-emerald-500/20",
  },
];

function Board() {
  const { applications, deleteApplication } = useApplications();

  const grouped = useMemo(() => {
    return columns.reduce((acc, column) => {
      acc[column.title] = applications.filter(
        (application) => application.status === column.title,
      );

      return acc;
    }, {});
  }, [applications]);

  return (
    <div className="mx-auto max-w-[1500px] space-y-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-primary">
          Pipeline
        </p>

        <h1 className="mt-1 text-2xl font-semibold">Application Board</h1>

        <p className="mt-1 text-sm text-text-muted">
          Visualize where every application stands.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-4">
        {columns.map((column) => (
          <div
            key={column.title}
            className={`rounded-2xl border ${column.color} bg-card/50 p-3`}
          >
            <div className="mb-4 flex items-center justify-between px-1">
              <h3 className="text-sm font-semibold">{column.title}</h3>

              <span className="rounded-lg bg-white/5 px-2 py-1 text-[11px] text-text-muted">
                {grouped[column.title].length}
              </span>
            </div>

            <div className="space-y-3">
              {grouped[column.title].map((application) => (
                <ApplicationCard
                  key={application.id}
                  application={application}
                  onDelete={deleteApplication}
                />
              ))}

              {grouped[column.title].length === 0 && (
                <div className="rounded-xl border border-dashed border-white/5 p-8 text-center">
                  <p className="text-xs text-text-muted">No applications</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
