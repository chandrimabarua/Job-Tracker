import { BriefcaseBusiness, Clock3, MessageSquare, Trophy } from "lucide-react";

import Hero from "../components/dashboard/Hero";
import StatCard from "../components/dashboard/StatCard";
import WeeklyGoal from "../components/dashboard/WeeklyGoal";
import RecentApplications from "../components/dashboard/RecentApplications";
import ApplicationProgress from "../components/dashboard/ApplicationProgress";

import useApplications from "../hooks/useApplications";

function Dashboard() {
  const { applications } = useApplications();

  const total = applications.length;

  const inProgress = applications.filter(
    (item) => item.status === "In Progress",
  ).length;

  const interviews = applications.filter(
    (item) => item.status === "Interview",
  ).length;

  const offers = applications.filter((item) => item.status === "Offer").length;

  return (
    <div className="mx-auto max-w-[1500px] space-y-6">
      <Hero />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Applications"
          value={total}
          subtitle="All tracked applications"
          icon={BriefcaseBusiness}
        />

        <StatCard
          title="In Progress"
          value={inProgress}
          subtitle="Currently active"
          icon={Clock3}
        />

        <StatCard
          title="Interviews"
          value={interviews}
          subtitle="Upcoming opportunities"
          icon={MessageSquare}
        />

        <StatCard
          title="Offers"
          value={offers}
          subtitle="Offers received"
          icon={Trophy}
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <RecentApplications applications={applications} />

        <ApplicationProgress applications={applications} />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <WeeklyGoal />

        <div className="glass rounded-2xl p-5">
          <h3 className="font-semibold">Quick insight</h3>

          <p className="mt-2 text-sm leading-6 text-text-muted">
            Keep your application pipeline updated after every recruiter
            response, interview, or status change.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-white/[0.03] p-3">
              <p className="text-[11px] text-text-muted">Applied</p>
              <p className="mt-1 text-lg font-semibold">
                {applications.filter((a) => a.status === "Applied").length}
              </p>
            </div>

            <div className="rounded-xl bg-white/[0.03] p-3">
              <p className="text-[11px] text-text-muted">Interviews</p>
              <p className="mt-1 text-lg font-semibold">{interviews}</p>
            </div>

            <div className="rounded-xl bg-white/[0.03] p-3">
              <p className="text-[11px] text-text-muted">Offers</p>
              <p className="mt-1 text-lg font-semibold">{offers}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
