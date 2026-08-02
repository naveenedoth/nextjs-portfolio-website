"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function About() {
  const [activeTab, setActiveTab] = useState("Skills");

  const renderContent = () => {
    switch (activeTab) {
      case "Skills":
        return (
          <div className="space-y-5">
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-teal-300">
                Languages
              </h2>
              <p className="leading-7 text-slate-300">
                Java, JavaScript, TypeScript, Python, C, C++, SQL, HTML/CSS,
                Dart
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-teal-300">
                Frameworks
              </h2>
              <p className="leading-7 text-slate-300">
                React, Spring Boot, Angular, Next.js, Django, Flutter, Tailwind,
                Bootstrap, PyBaMM
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-teal-300">
                Developer Tools
              </h2>
              <p className="leading-7 text-slate-300">
                Git, GitHub, GitLab, VS Code, IntelliJ, Spring Tool Suite,
                Postman, DBeaver, Visual Studio, PyCharm
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-teal-300">
                DevOps & Quality Tools
              </h2>
              <p className="leading-7 text-slate-300">
                Docker, Podman, SonarQube
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-teal-300">
                Security Tools
              </h2>
              <p className="leading-7 text-slate-300">SELinux, AppArmor</p>
            </div>
          </div>
        );

      case "Experience":
        return (
          <div className="space-y-6">
            <p className="border-l-2 border-teal-400 pl-4 leading-7 text-slate-300">
              Software Engineer, Tata Elxsi – Trivandrum, Kerala, India
              <span className="block text-sm text-slate-500">
                December 2024 – present
              </span>
            </p>
            <p className="border-l-2 border-teal-400 pl-4 leading-7 text-slate-300">
              Software Engineer Intern, Tata Elxsi – Trivandrum, Kerala, India
              <span className="block text-sm text-slate-500">
                January 2024 – June 2024
              </span>
            </p>
            <p className="border-l-2 border-teal-400 pl-4 leading-7 text-slate-300">
              Software Developer Intern, NATPAC &amp; KSRTC – Kochi, Kerala,
              India
              <span className="block text-sm text-slate-500">
                June 2023 – June 2024
              </span>
            </p>
            <p className="border-l-2 border-teal-400 pl-4 leading-7 text-slate-300">
              PyBaMM Developer Intern, EEE Department of CUSAT – Kochi, Kerala,
              India
              <span className="block text-sm text-slate-500">
                May 2023 – June 2023
              </span>
            </p>
          </div>
        );

      case "Education":
        return (
          <div className="space-y-6">
            <p className="border-l-2 border-teal-400 pl-4 leading-7 text-slate-300">
              Cochin University of Science and Technology – B. Tech Information
              Technology
              <span className="block text-sm text-slate-500">
                CGPA 9.03 · 2024
              </span>
            </p>
            <p className="border-l-2 border-teal-400 pl-4 leading-7 text-slate-300">
              Govt. Model HSS, Kozhikode
              <span className="block text-sm text-slate-500">
                Plus Two Kerala HSE · 97% · 2018
              </span>
            </p>
            <p className="border-l-2 border-teal-400 pl-4 leading-7 text-slate-300">
              MSS Public School, Mavilikkadavu
              <span className="block text-sm text-slate-500">
                Class X CBSE · 92% · 2016
              </span>
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <title>About Me - Naveen L S</title>
      <main className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <div className="relative overflow-hidden px-4 py-12 sm:px-6 md:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="relative mx-auto w-full max-w-5xl">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl sm:p-8 md:p-10">
              <div className="mb-8 text-center">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-teal-400">
                  Get to know me
                </p>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  About{" "}
                  <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    Me
                  </span>
                </h1>
                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
              </div>
              <p className="mx-auto mb-9 max-w-4xl text-center text-sm leading-7 text-slate-300 sm:text-base">
                I&apos;m a passionate developer with a strong foundation in both
                frontend and backend development, continually exploring the
                latest technologies in the tech industry. My enthusiasm for
                coding drives me to solve complex problems while embracing new
                challenges. With a focus on full-stack development and AI
                algorithms, I am committed to learning quickly and adapting to
                evolving landscapes. I aspire to excel in the tech industry,
                leveraging my skills and experiences to innovate and create
                impactful solutions.
              </p>
              <div className="mb-6 grid grid-cols-1 gap-2 rounded-2xl border border-white/10 bg-slate-900/60 p-2 sm:grid-cols-3">
                {["Skills", "Experience", "Education"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/20"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="min-h-[280px] rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-inner sm:p-7">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
