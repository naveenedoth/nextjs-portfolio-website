"use client";
import { ReactNode, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

interface Project {
  id: number;
  title: string;
  description: string;
  details: ReactNode | string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Online Doctor Appointment Booking System",
    description:
      "Technologies used: HTML, CSS, JavaScript, Bootstrap, PHP, SQL",
    details: (
      <ul className="space-y-3 text-sm leading-6 text-slate-700">
        <li>
          • Developed an online platform for booking doctor appointments as an
          end-semester mini project
        </li>
        <li>
          • Built a web-based interface using HTML, CSS, and JavaScript to
          ensure user-friendly navigation
        </li>
        <li>
          • Utilized MySQL for database management and PHP for server-side
          scripting
        </li>
        <li>
          • Implemented features such as appointment scheduling, doctor
          availability checking, and user authentication
        </li>
        <li>• Technologies used: HTML, CSS, JavaScript, Bootstrap, PHP, SQL</li>
        <li>
          • GitHub link:{" "}
          <Link
            href="https://github.com/naveenedoth/KYANITE"
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-blue-600 underline hover:text-blue-800"
          >
            https://github.com/naveenedoth/KYANITE
          </Link>
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Hostel Mess & Meal Share App",
    description: "Technologies used: Flutter, Firebase",
    details: (
      <ul className="space-y-3 text-sm leading-6 text-slate-700">
        <li>
          • Developed a mobile application for hostel mess management and food
          sharing as an end-semester mini project
        </li>
        <li>
          • Created an intuitive interface using Flutter to cater to various
          users, including mess secretaries and mess inmates
        </li>
        <li>
          • Integrated Firebase for real-time database management, user
          authentication, and data storage
        </li>
        <li>
          • Implemented a feature for sharing and purchasing unneeded meal slots
          via food coupons
        </li>
        <li>
          • Facilitated efficient meal schedule coordination and enhanced food
          utilization
        </li>
        <li>• Technologies used: Flutter, Firebase</li>
        <li>
          • GitHub link:{" "}
          <Link
            href="https://github.com/shyamjp2002/Meal-Share-App"
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-blue-600 underline hover:text-blue-800"
          >
            https://github.com/shyamjp2002/Meal-Share-App
          </Link>
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Check my GitHub for more projects",
    description: "Click here to see my GitHub repositories",
    details: "https://github.com/naveenedoth?tab=repositories",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <title>Projects done by Naveen L S</title>

      <main className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <div className="relative overflow-hidden px-4 py-12 sm:px-6 md:py-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-teal-400">
                My work
              </p>
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                Featured{" "}
                <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                Click on a project to explore more details.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="group flex min-h-[220px] cursor-pointer flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-teal-500/10"
                  onClick={() => handleCardClick(project)}
                >
                  <div>
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 text-sm font-bold text-teal-300">
                      0{project.id}
                    </div>
                    <h2 className="text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-teal-300">
                      {project.title}
                    </h2>
                  </div>
                  <div className="mt-8">
                    <p className="text-sm leading-6 text-slate-400">
                      {project.description}
                    </p>
                    <p className="mt-4 text-sm font-medium text-teal-400">
                      View details →
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-white p-6 text-black shadow-2xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-600">
                  Project 0{selectedProject.id}
                </p>

                <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                  {selectedProject.title}
                </h2>
              </div>
              {selectedProject.id === 3 ? (
                <div>
                  <a
                    href={selectedProject.details as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {selectedProject.description}
                  </a>
                </div>
              ) : (
                <div>{selectedProject.details}</div>
              )}
              <button
                className="mt-8 w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-teal-600 sm:w-auto"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
