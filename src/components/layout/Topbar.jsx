import { Bell, Menu, Search } from "lucide-react";

function Topbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-app-bg/80 backdrop-blur-xl">
      <div className="flex h-[76px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="rounded-xl border border-white/5 bg-card p-2.5 text-text-muted hover:text-white lg:hidden"
          >
            <Menu size={20} />
          </button>

          <div className="hidden items-center gap-3 rounded-xl border border-white/5 bg-card px-4 py-2.5 md:flex">
            <Search size={17} className="text-text-muted" />

            <input
              type="text"
              placeholder="Search..."
              className="w-44 bg-transparent text-sm text-white outline-none placeholder:text-text-muted"
            />

            <span className="rounded-md border border-white/5 px-2 py-0.5 text-[10px] text-text-muted">
              ⌘ K
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative rounded-xl border border-white/5 bg-card p-2.5 text-text-muted transition hover:text-white">
            <Bell size={18} />

            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
          </button>

          <div className="flex items-center gap-3 border-l border-white/5 pl-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium">Chandrima</p>
              <p className="text-[11px] text-text-muted">Job Seeker</p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo-500 text-sm font-semibold">
              C
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
