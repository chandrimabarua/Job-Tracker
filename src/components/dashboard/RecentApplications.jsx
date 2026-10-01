import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import StatusBadge from "../applications/StatusBadge";
import { formatDate } from "../../utils/helper";

function RecentApplications({ applications }) {
  const recent = applications.slice(0, 5);

  return (
    <div className="glass rounded-2xl">
      <div className="flex items-center justify-between border-b border-white/5 p-5">
        <div>
          <h3 className="font-semibold">Recent applications</h3>
          <p className="mt-1 text-xs text-text-muted">
            Your latest job applications
          </p>
        </div>

        <Link
          to="/applications"
          className="flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-light"
        >
          View all
          <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="divide-y divide-white/5">
        {recent.map((application) => (
          <div
            key={application.id}
            className="flex flex-col gap-3 p-5 transition hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card-light text-xs font-semibold">
                {application.company.slice(0, 2).toUpperCase()}
              </div>

              <div>
                <h4 className="text-sm font-medium">{application.role}</h4>
                <p className="mt-1 text-xs text-text-muted">
                  {application.company} · {application.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-text-muted">
                {formatDate(application.appliedDate)}
              </span>

              <StatusBadge status={application.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentApplications;
