"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function About() {
  const [activeTab, setActiveTab] = useState("Skills");

  const renderContent = () => {
    switch (activeTab) {
      case "Skills":
        return (
          <div>
            <h2 className="text-lg font-bold mb-2">Languages:</h2>
            <p className="mb-2">
              Java, JavaScript, TypeScript, Python, C, C++, SQL, HTML/CSS, Dart
            </p>
            <h2 className="text-lg font-bold mb-2">Frameworks:</h2>
            <p className="mb-2">
              React, Spring Boot, Angular, Next.js, Django, Flutter, Tailwind,
              Bootstrap, PyBaMM
            </p>
            <h2 className="text-lg font-bold mb-2">Developer Tools:</h2>
            <p className="mb-2">
              Git, GitHub, GitLab, VS Code, IntelliJ, Spring Tool Suite,
              Postman, DBeaver, Visual Studio, PyCharm
            </p>
            <h2 className="text-lg font-bold mb-2">DevOps & Quality Tools:</h2>
            <p className="mb-2">Docker, Podman, SonarQube</p>
            <h2 className="text-lg font-bold mb-2">Security Tools:</h2>
            <p className="mb-2">SELinux, AppArmor</p>
          </div>
        );
      case "Experience":
        return (
          <div>
            <p>
              Software Engineer, Tata Elxsi – Trivandrum, Kerala, India
              (December 2024 – present)
            </p>
            <br />
            <p>
              Software Engineer Intern, Tata Elxsi – Trivandrum, Kerala, India
              (January 2024 – June 2024)
            </p>
            <br />
            <p>
              Software Developer Intern, NATPAC &amp; KSRTC – Kochi, Kerala,
              India (June 2023 – June 2024)
            </p>
            <br />
            <p>
              PyBaMM Developer Intern, EEE Department of CUSAT – Kochi, Kerala,
              India (May 2023 – June 2023)
            </p>
          </div>
        );
      case "Education":
        return (
          <div>
            <p>
              Cochin University of Science and Technology – B. Tech Information
              Technology (CGPA 9.03) - 2024
            </p>
            <br />
            <p>Govt. Model HSS, Kozhikode - Plus Two Kerala HSE (97%) - 2018</p>
            <br />
            <p>MSS Public School, Mavilikkadavu - Class X CBSE (92%) - 2016</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <title>About Me - Naveen L S</title>
      <main className="bg-gray-500 min-h-screen flex flex-col text-white">
        <Navbar />
        <div className="flex flex-col items-center p-4 sm:p-8">
          <div className="w-full md:w-2/3 max-w-5xl bg-black bg-opacity-30 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl text-center font-bold mb-4">
              About Me
            </h1>
            <p className="mb-4">
              I&apos;m a passionate developer with a strong foundation in both
              frontend and backend development, continually exploring the latest
              technologies in the tech industry. My enthusiasm for coding drives
              me to solve complex problems while embracing new challenges. With
              a focus on full-stack development and AI algorithms, I am
              committed to learning quickly and adapting to evolving landscapes.
              I aspire to excel in the tech industry, leveraging my skills and
              experiences to innovate and create impactful solutions.
              <br />
              <br />
            </p>

            <div className="flex flex-col sm:flex-row gap-2 mb-4 justify-center">
              <button
                onClick={() => setActiveTab("Skills")}
                className={`w-full sm:w-1/3 px-4 py-2 rounded ${
                  activeTab === "Skills"
                    ? "bg-teal-500 text-white"
                    : "bg-gray-700 text-white"
                } hover:bg-teal-500 hover:text-white hover-delay`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab("Experience")}
                className={`w-full sm:w-1/3 px-4 py-2 rounded ${
                  activeTab === "Experience"
                    ? "bg-teal-500 text-white"
                    : "bg-gray-700 text-white"
                } hover:bg-teal-500 hover:text-white hover-delay`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("Education")}
                className={`w-full sm:w-1/3 px-4 py-2 rounded ${
                  activeTab === "Education"
                    ? "bg-teal-500 text-white"
                    : "bg-gray-700 text-white"
                } hover:bg-teal-500 hover:text-white hover-delay`}
              >
                Education
              </button>
            </div>

            <div className="bg-gray-700 p-4 rounded shadow">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
