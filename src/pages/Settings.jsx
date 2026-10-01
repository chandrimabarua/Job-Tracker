import { Bell, Palette, UserRound } from "lucide-react";

function Settings() {
  return (
    <div className="mx-auto max-w-[1000px] space-y-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-primary">
          Preferences
        </p>

        <h1 className="mt-1 text-2xl font-semibold">Settings</h1>

        <p className="mt-1 text-sm text-text-muted">
          Manage your Job Tracker preferences.
        </p>
      </div>

      <section className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <UserRound size={18} />
          </div>

          <div>
            <h2 className="text-sm font-semibold">Profile</h2>
            <p className="text-xs text-text-muted">Basic account information</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs text-text-muted">Name</label>

            <input
              value="Chandrima"
              readOnly
              className="w-full rounded-xl border border-white/5 bg-card-light px-4 py-3 text-sm outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs text-text-muted">Role</label>

            <input
              value="Job Seeker"
              readOnly
              className="w-full rounded-xl border border-white/5 bg-card-light px-4 py-3 text-sm outline-none"
            />
          </div>
        </div>
      </section>

      <section className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Bell size={18} />
          </div>

          <div>
            <h2 className="text-sm font-semibold">Notifications</h2>
            <p className="text-xs text-text-muted">Notification preferences</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <label className="flex items-center justify-between rounded-xl border border-white/5 bg-card-light p-4">
            <div>
              <p className="text-sm">Interview reminders</p>
              <p className="mt-1 text-xs text-text-muted">
                Get reminders for upcoming interviews
              </p>
            </div>

            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 accent-[#7c5cff]"
            />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-white/5 bg-card-light p-4">
            <div>
              <p className="text-sm">Application updates</p>
              <p className="mt-1 text-xs text-text-muted">
                Receive application tracking updates
              </p>
            </div>

            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 accent-[#7c5cff]"
            />
          </label>
        </div>
      </section>

      <section className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Palette size={18} />
          </div>

          <div>
            <h2 className="text-sm font-semibold">Appearance</h2>
            <p className="text-xs text-text-muted">Current application theme</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
          <p className="text-sm font-medium">Dark Premium</p>

          <p className="mt-1 text-xs text-text-muted">
            Deep navy background with purple accents.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Settings;
