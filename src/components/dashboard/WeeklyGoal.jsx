import { Target } from "lucide-react";

function WeeklyGoal() {
  const completed = 8;
  const goal = 12;
  const percentage = Math.round((completed / goal) * 100);

  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Target size={19} />
          </div>

          <div>
            <h3 className="text-sm font-semibold">Weekly goal</h3>
            <p className="text-xs text-text-muted">Applications this week</p>
          </div>
        </div>

        <span className="text-sm font-semibold">{percentage}%</span>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-primary transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-3 flex justify-between text-xs text-text-muted">
        <span>{completed} completed</span>
        <span>{goal} target</span>
      </div>
    </div>
  );
}

export default WeeklyGoal;
