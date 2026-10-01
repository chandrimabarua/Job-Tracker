import { MapPin, Trash2 } from "lucide-react";

function ApplicationCard({ application, onDelete }) {
  return (
    <div className="hover-card rounded-2xl border border-white/5 bg-card p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-card-light text-[10px] font-semibold">
          {application.company.slice(0, 2).toUpperCase()}
        </div>

        <button
          onClick={() => onDelete(application.id)}
          className="rounded-lg p-1.5 text-text-muted hover:bg-red-500/10 hover:text-red-400"
        >
          <Trash2 size={15} />
        </button>
      </div>

      <h4 className="mt-4 text-sm font-semibold">{application.role}</h4>

      <p className="mt-1 text-xs text-text-muted">{application.company}</p>

      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-text-muted">
        <MapPin size={13} />
        {application.location || "Remote"}
      </div>

      <div className="mt-4 border-t border-white/5 pt-3">
        <span className="text-[11px] text-text-muted">{application.type}</span>
      </div>
    </div>
  );
}

export default ApplicationCard;
