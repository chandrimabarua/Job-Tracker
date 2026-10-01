import {
  LayoutDashboard,
  BriefcaseBusiness,
  KanbanSquare,
  CalendarDays,
  BarChart3,
  Settings,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Applications",
    path: "/applications",
    icon: BriefcaseBusiness,
  },
  {
    label: "Board",
    path: "/board",
    icon: KanbanSquare,
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: CalendarDays,
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`sidebar-transition fixed left-0 top-0 z-40 flex h-screen w-[280px] flex-col border-r border-white/5 bg-sidebar px-5 py-6 ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
            <BriefcaseBusiness size={20} />
          </div>

          <div>
            <h1 className="text-base font-semibold">Job Tracker</h1>
            <p className="text-[11px] text-text-muted">Career workspace</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="rounded-lg p-2 text-text-muted hover:bg-white/5 hover:text-white lg:hidden"
        >
          <X size={18} />
        </button>
      </div>

      <div className="mt-10">
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-text-muted">
          Workspace
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-text-muted hover:bg-white/5 hover:text-text-main"
                  }`
                }
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto rounded-2xl border border-primary/10 bg-primary/5 p-4">
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <BriefcaseBusiness size={17} />
        </div>

        <h3 className="text-sm font-semibold">Stay consistent</h3>

        <p className="mt-1 text-xs leading-5 text-text-muted">
          Keep your applications organized and move closer to your next role.
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
