import { Inbox } from "lucide-react";

function EmptyState({
  title = "Nothing here yet",
  description = "There is no data to display.",
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Inbox size={26} />
      </div>

      <h3 className="text-lg font-semibold text-text-main">{title}</h3>

      <p className="mt-2 max-w-sm text-sm text-text-muted">{description}</p>
    </div>
  );
}

export default EmptyState;
