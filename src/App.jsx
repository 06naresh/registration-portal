import { useState } from "react";
import { ArrowRight, CheckCircle2, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";

import RegistrationForm from "./components/registration/RegistrationForm";
import Notice from "./components/ui/Notice";

const benefits = [
  "Personalized learning dashboard",
  "Track your course applications",
  "Get updates about your enrollment",
];

export default function App() {
  const [submittedName, setSubmittedName] = useState("");

  return (
    <main className="mx-auto min-h-screen max-w-360 px-5 sm:px-8 lg:px-[6.2%]">
      <header className="flex h-19 items-center justify-between border-b border-slate-200/80 sm:h-22">
        <a href="/" aria-label="Enrolly home" className="flex items-center gap-2.5 font-heading text-xl font-extrabold tracking-tight text-slate-800 sm:text-2xl">
          <span className="grid size-10 place-items-center rounded-xl bg-brand text-white shadow-lg shadow-violet-200">
            <GraduationCap size={22} />
          </span>
          <span>
            enrolly<span className="-ml-2 text-brand">.</span>
          </span>
        </a>

        <p className="text-xs text-slate-500 sm:text-sm">
          Already have an account?{""}
          <a href="#registration" className="inline-flex items-center gap-1 font-semibold text-brand hover:text-brand-dark">
            Sign in <ArrowRight size={14}/>
          </a>
        </p>
      </header>

      <section className="grid items-center gap-8 py-9 md:py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-16">
        <aside className="relative overflow-hidden py-2 lg:py-5">
          <div className="pointer-events-none absolute -right-16 top-5 size-48 rounded-full border-35 border-violet-100/80">
            <Sparkles size={15}/>
            YOUR NEXT CHAPTER STARTS HERE
          </div>

          <h1 className="relative mt-6 font-heading text-5xl leading-[1.1] font-extrabold tracking-tight text-slate-800 sm:text-6xl lg:text-[64px]">
            Make room for
            <br />
            <span className="text-brand">what's next.</span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
            Create your learner account and take the first step toward your goals. Your next opportunity is closer than you think.
          </p>

          <div className="mt-5 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-xs font-semibold text-slate-600 sm:text-sm">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-violet-100 text-brand">
                  <CheckCircle2 size={17}/>
                </span>
                {benefit}
              </div>
            ))}
          </div>

          <div className="relative hidden max-w-sm rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm sm:block">
            <div className="mb-2 text-sm tracking-widest text-amber-400">
              *****
            </div>
            <p className="font-heading text-sm font-bold text-slate-600">
              "A simple first step can open a world of possibilities."
            </p>
            <span className="mt-3 block text-[10px] font-extrabold tracking-widest text-slate-400">
              THE ENROLLY TEAM
            </span>
          </div>
        </aside>

        <section id="registration" className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_22px_65px_rgba(52,70,108,0.06)] sm:p-8 lg:p-10">
          <div className="mb-7 flex items-start gap-3.5">
            <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-violet-50 text-brand">
              <GraduationCap size={24}/>
            </div>

            <div>
              <p className="mb-1 text-[10px] font-extrabold tracking-widest text-brand">
                GET STARTED = IT'S FREE
              </p>
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
                Create your account
              </h2>
              <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                Enter your details to get your journey underway.
              </p>
            </div>
          </div>

          {submittedName && (
            <Notice
              type="success"
              title="Registration request submitted"
            >
              Thank, {submittedName}! Your demo registration was accepted by the mock API.
            </Notice>
          )}

          <RegistrationForm
            onSuccess={(name) => setSubmittedName(name)}
          />

          <div className="mt-6 flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-center text-[10px] text-slate-500 sm:text-xs">
            <ShieldCheck size={16} className="shrink-0 text-emerald-500" />
            Your information is protected and kept private.
          </div>

          <p className="mt-3 text-center text-[10px] leading-5 text-slate-400">
            By creating an account, you agree to our{" "}
            <a href="#terms" className="font-semibold text-brand">
              Terms of service
            </a>{" "}
            and {" "}
            <a href="#privacy" className="font-semibold text-brand">
              Privacy Policy
            </a>.
          </p>
        </section>
      </section>

      <footer className="flex min-h-16 items-center justify-between border-t border-slate-200/80 text-[10px] text-slate-400 sm:text-xs">
          <span>© {new Date().getFullYear()} Enrolly</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Built for your next step
          </span>
      </footer>
    </main>
  );
}