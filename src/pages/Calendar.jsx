import { CalendarDays, Clock3, Video } from "lucide-react";

const interviews = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    date: "Oct 04, 2026",
    time: "10:00 AM",
    type: "Technical Interview",
  },
  {
    id: 2,
    company: "Stripe",
    role: "Frontend Engineer",
    date: "Oct 07, 2026",
    time: "02:30 PM",
    type: "Recruiter Call",
  },
];

function Calendar() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-primary">
          Schedule
        </p>

        <h1 className="mt-1 text-2xl font-semibold">Calendar</h1>

        <p className="mt-1 text-sm text-text-muted">
          Keep track of interviews and important career events.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="glass rounded-2xl p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <CalendarDays size={22} />
          </div>

          <h2 className="mt-5 text-lg font-semibold">October 2026</h2>

          <p className="mt-2 text-sm leading-6 text-text-muted">
            Your upcoming interviews and scheduled career activities will appear
            here.
          </p>

          <div className="mt-6 rounded-xl border border-primary/10 bg-primary/5 p-4">
            <p className="text-xs text-primary">Upcoming events</p>

            <p className="mt-1 text-2xl font-semibold">{interviews.length}</p>
          </div>
        </div>

        <div className="space-y-4">
          {interviews.map((item) => (
            <div key={item.id} className="glass hover-card rounded-2xl p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-lg bg-purple-500/10 px-2.5 py-1 text-[11px] text-purple-400">
                    {item.type}
                  </span>

                  <h3 className="mt-3 text-base font-semibold">{item.role}</h3>

                  <p className="mt-1 text-sm text-text-muted">{item.company}</p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Video size={18} />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-4 border-t border-white/5 pt-4 text-xs text-text-muted">
                <span className="flex items-center gap-2">
                  <CalendarDays size={14} />
                  {item.date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={14} />
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
