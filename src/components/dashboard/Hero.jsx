import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#171941] via-[#10132f] to-[#0d0e25] p-6 sm:p-8">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />

      <div className="absolute bottom-[-100px] right-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative max-w-2xl animate-fade-up">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary-light">
          <Sparkles size={14} />
          Career workspace
        </div>

        <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Welcome back, Chandrima 👋
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-text-muted sm:text-base">
          Keep building your career. Track applications, prepare for interviews,
          and stay organized throughout your job search.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/applications"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white shadow-lg shadow-primary/20 transition hover:bg-primary-light"
          >
            View applications
            <ArrowRight size={16} />
          </Link>

          <Link
            to="/board"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-text-main transition hover:bg-white/10"
          >
            Open board
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
