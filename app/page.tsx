import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { CURRENT_JOB_ROLE, CURRENT_LOCATION } from "./utils/constants";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Navbar />

      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-12 sm:px-8 md:py-20">
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 md:flex-row md:gap-10">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-xl sm:p-10 md:w-1/2">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-teal-400">
              Welcome to my portfolio website
            </p>
            <h1 className="text-2xl font-bold text-slate-200 sm:text-3xl">
              Hi, I&apos;m
            </h1>
            <h1 className="mt-1 text-5xl font-extrabold tracking-tight sm:text-6xl">
              <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Naveen
              </span>
            </h1>
            <p className="mt-4 text-lg font-medium text-slate-300 sm:text-xl">
              {CURRENT_JOB_ROLE}
            </p>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              from {CURRENT_LOCATION}
            </p>
            <div className="mt-7 h-px w-24 bg-gradient-to-r from-teal-400 to-transparent" />
          </div>
          <div className="group w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-teal-400/30 hover:shadow-teal-500/10 md:w-1/3">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/Naveen.png"
                alt="Naveen L S"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
