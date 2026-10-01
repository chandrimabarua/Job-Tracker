import { Trash2 } from "lucide-react";

import StatusBadge from "./StatusBadge";
import { formatDate } from "../../utils/helper";

function ApplicationTable({ applications, onDelete }) {
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] text-left">
          <thead>
            <tr className="border-b border-white/5 text-xs text-text-muted">
              <th className="px-5 py-4 font-medium">Company</th>
              <th className="px-5 py-4 font-medium">Role</th>
              <th className="px-5 py-4 font-medium">Location</th>
              <th className="px-5 py-4 font-medium">Applied</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 text-right font-medium">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            {applications.map((application) => (
              <tr
                key={application.id}
                className="transition hover:bg-white/[0.02]"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-card-light text-[10px] font-semibold">
                      {application.company.slice(0, 2).toUpperCase()}
                    </div>

                    <span className="text-sm font-medium">
                      {application.company}
                    </span>
                  </div>
                </td>

                <td className="px-5 py-4 text-sm">{application.role}</td>

                <td className="px-5 py-4 text-xs text-text-muted">
                  {application.location}
                </td>

                <td className="px-5 py-4 text-xs text-text-muted">
                  {formatDate(application.appliedDate)}
                </td>

                <td className="px-5 py-4">
                  <StatusBadge status={application.status} />
                </td>

                <td className="px-5 py-4 text-right">
                  <button
                    onClick={() => onDelete(application.id)}
                    className="rounded-lg p-2 text-text-muted transition hover:bg-red-500/10 hover:text-red-400"
                    title="Delete application"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApplicationTable;
