function StatusBadge({ status }) {
  const styles = {
    Applied: "bg-blue-500/10 text-blue-400",
    "In Progress": "bg-amber-500/10 text-amber-400",
    Interview: "bg-purple-500/10 text-purple-400",
    Offer: "bg-emerald-500/10 text-emerald-400",
    Rejected: "bg-red-500/10 text-red-400",
  };

  return (
    <span
      className={`inline-flex rounded-lg px-2.5 py-1 text-[11px] font-medium ${
        styles[status] || "bg-white/5 text-text-muted"
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
