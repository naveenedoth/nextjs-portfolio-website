"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Spinner from "@/app/components/Spinner";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyOiqQIH3z8gz_jE7STmRQKVo5d202k-3s9ZrjZlhoJJu8AuFUo6DTEJ5pVvdmobyxY/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    setSpinner(true);

    try {
      await fetch(scriptURL, { method: "POST", body: formData });
      setNotification({
        type: "success",
        message: "Your message has been sent successfully!",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: unknown) {
      setNotification({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
      if (error instanceof Error) {
        console.error("Error!", error.message);
      } else {
        console.error("Unexpected error: ", error);
      }
    } finally {
      setSpinner(false);
    }
  };

  return (
    <>
      <title>Contact Me - Naveen L S</title>

      <main className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <div className="relative overflow-hidden px-4 py-12 sm:px-6 md:py-20">
          <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-teal-400">
                Let&apos;s connect
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Contact{" "}
                <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Me
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                I am ready for contact or any inquiries. Feel free to message
                me!
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
                name="submit-to-google-sheet"
              >
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-slate-300"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-teal-400/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-teal-400/10"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-slate-300"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-teal-400/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-teal-400/10"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-slate-300"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-teal-400/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-teal-400/10"
                    placeholder="Write your message..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-teal-400 hover:to-cyan-400 hover:shadow-xl hover:shadow-teal-500/30 focus:outline-none focus:ring-2 focus:ring-teal-400/50 sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-teal-400">
                Get in touch
              </p>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Let&apos;s talk.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Whether you have a question, an opportunity, or simply want to
                connect, you can reach me through any of the channels below.
              </p>
              <div className="mt-8 space-y-5">
                <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 transition-all duration-300 hover:border-teal-400/20 hover:bg-slate-900">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </p>
                  <a
                    href="mailto:naveenedoth@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block break-all text-sm text-teal-300 transition-colors hover:text-teal-200"
                  >
                    naveenedoth@gmail.com
                  </a>
                </div>
                <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 transition-all duration-300 hover:border-teal-400/20 hover:bg-slate-900">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/naveenls/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block break-all text-sm text-teal-300 transition-colors hover:text-teal-200"
                  >
                    linkedin.com/in/naveenls
                  </a>
                </div>
                <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 transition-all duration-300 hover:border-teal-400/20 hover:bg-slate-900">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/naveenedoth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block break-all text-sm text-teal-300 transition-colors hover:text-teal-200"
                  >
                    github.com/naveenedoth
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

        {notification && (
          <div className="fixed right-4 top-4 z-[60] w-[calc(100%-2rem)] max-w-sm animate-[slideIn_0.3s_ease-out]">
            <div
              className={`relative overflow-hidden rounded-2xl border p-4 shadow-2xl backdrop-blur-xl ${
                notification.type === "success"
                  ? "border-teal-400/20 bg-slate-900/95"
                  : "border-red-400/20 bg-slate-900/95"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    notification.type === "success"
                      ? "bg-teal-400/10 text-teal-400"
                      : "bg-red-400/10 text-red-400"
                  }`}
                >
                  {notification.type === "success" ? "✓" : "!"}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">
                    {notification.type === "success"
                      ? "Message Sent"
                      : "Something went wrong"}
                  </p>
                  <p className="mt-1 text-sm leading-5 text-slate-400">
                    {notification.message}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setNotification(null)}
                  className="text-lg leading-none text-slate-500 transition-colors hover:text-white"
                  aria-label="Close notification"
                >
                  ×
                </button>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-0.5 w-full ${
                  notification.type === "success"
                    ? "bg-gradient-to-r from-teal-400 to-cyan-400"
                    : "bg-gradient-to-r from-red-400 to-orange-400"
                }`}
              />
            </div>
          </div>
        )}

        {spinner && <Spinner />}
      </main>
    </>
  );
}
