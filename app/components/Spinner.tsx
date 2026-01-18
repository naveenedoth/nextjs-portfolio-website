"use client";

export default function Spinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-t-transparent border-blue-500"></div>
    </div>
  );
}
