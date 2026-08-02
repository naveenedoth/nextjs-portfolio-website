"use client";

export default function Spinner() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/80 px-8 py-7 shadow-2xl">
        <div className="h-11 w-11 animate-spin rounded-full border-4 border-slate-600 border-t-teal-400" />
        <p className="text-sm font-medium text-slate-300">Sending...</p>
      </div>
    </div>
  );
}
