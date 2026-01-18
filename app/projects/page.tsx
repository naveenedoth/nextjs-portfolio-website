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
      <ul>
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
            className="text-blue-600 underline hover:text-blue-800"
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
      <ul>
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
            className="text-blue-600 underline hover:text-blue-800"
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
      <main className="bg-gray-500 min-h-screen flex flex-col text-white">
        <Navbar />
        <div className="mt-10 md:mt-48">
          <p className="mb-4 text-lg text-center">
            Click cards to see more details.
          </p>
          <div className="flex-col md:flex-row justify-center items-center flex-grow p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-black bg-opacity-30 p-4 rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[150px] text-center"
                onClick={() => handleCardClick(project)}
              >
                <h2 className="text-xl font-bold">{project.title}</h2>
                <br />
                <div>{project.description}</div>
              </div>
            ))}
          </div>
        </div>
        {selectedProject && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div className="bg-white text-black p-4 sm:p-8 rounded-lg w-4/5 sm:w-1/2">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <br />
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
              <br />
              <button
                className="mt-4 px-4 py-2 bg-teal-500 text-white rounded transition duration-300 ease-in-out hover:bg-teal-600 w-full md:w-auto"
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
