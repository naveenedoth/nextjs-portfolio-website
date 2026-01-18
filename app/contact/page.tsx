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
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: unknown) {
      alert("Error: Message not sent!");
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
      <main className="bg-gray-500 min-h-screen flex flex-col text-white">
        <Navbar />
        <div className="flex flex-grow justify-center items-center p-8">
          <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-12 w-full">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
              <p className="mb-5">
                I am ready for contact or any inquiries. Feel free to message
                me!
              </p>
              <form
                onSubmit={handleSubmit}
                className="w-full space-y-4"
                name="submit-to-google-sheet"
              >
                <div>
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-teal-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-teal-600 w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex-1 bg-black bg-opacity-60 p-6 rounded-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p>
                Email:{" "}
                <a
                  href="mailto:naveenedoth@gmail.com"
                  className="text-blue-300 underline"
                >
                  naveenedoth@gmail.com
                </a>
              </p>
              <p>Location: Kozhikode, India</p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/naveenls/"
                  className="text-blue-300 underline"
                >
                  https://www.linkedin.com/in/naveenls/
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/naveenedoth"
                  className="text-blue-300 underline"
                >
                  https://github.com/naveenedoth
                </a>
              </p>
            </div>
            
          </div>
        </div>
        <Footer />
        {spinner && <Spinner />}
      </main>
    </>
  );
}
