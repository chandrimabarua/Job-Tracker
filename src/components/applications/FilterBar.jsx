import { Search, SlidersHorizontal } from "lucide-react";

function FilterBar({ search, setSearch, status, setStatus }) {
  return (
    <div className="glass flex flex-col gap-3 rounded-2xl p-4 md:flex-row">
      <div className="relative flex-1">
        <Search
          size={17}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
        />

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search company or role..."
          className="w-full rounded-xl border border-white/5 bg-card-light py-3 pl-11 pr-4 text-sm outline-none placeholder:text-text-muted focus:border-primary/30"
        />
      </div>

      <div className="relative">
        <SlidersHorizontal
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
        />

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          className="w-full appearance-none rounded-xl border border-white/5 bg-card-light py-3 pl-10 pr-10 text-sm outline-none focus:border-primary/30 md:w-48"
        >
          <option value="All">All statuses</option>
          <option value="Applied">Applied</option>
          <option value="In Progress">In Progress</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
