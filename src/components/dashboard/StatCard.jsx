function StatCard({ title, value, subtitle, icon: Icon, trend }) {
  return (
    <div className="hover-card glass rounded-2xl p-5 animate-fade-up">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon size={20} />
        </div>

        {trend && (
          <span className="rounded-lg bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-400">
            {trend}
          </span>
        )}
      </div>

      <p className="mt-5 text-sm text-text-muted">{title}</p>

      <h3 className="mt-1 text-2xl font-semibold">{value}</h3>

      {subtitle && <p className="mt-1 text-xs text-text-muted">{subtitle}</p>}
    </div>
  );
}

export default StatCard;
