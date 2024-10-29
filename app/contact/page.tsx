"use client";

import { useState } from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            message,
        };

        // Send a POST request to your Google Sheets API endpoint here
        await fetch('https://script.google.com/macros/s/AKfycbxnpTwe0vJLknH51j8LYcmKUjy4z-pkvh_onZxHkZbsT10q6IjpOSIMAExY-xG1pDpdwA/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
        alert("Message sent successfully!");
    };

    return (
        <main className="bg-gray-500 min-h-screen flex flex-col text-white">
            <Navbar />
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-around items-center flex-grow p-8"> {/* Changed items-start to items-center */}

                <div className="flex-1 mb-8 md:mr-12">
                    <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
                    <p className="mb-5">I am ready for contact or any inquiries. Feel free to message me!</p>
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="name">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="email">Your Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="message">Your Message</label>
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
                            className="bg-teal-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-teal-600" 
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="flex justify-center items-center flex-1 h-full"> 
                    <div className="bg-black bg-opacity-60 p-4 rounded-lg max-w-md w-full mx-auto"> 
                        <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                        <p>Email: naveenedoth@gmail.com</p>
                        <p>Location: Kozhikode, India</p>
                        <p>
                            LinkedIn: <a href="https://www.linkedin.com/in/naveenls/" className="text-blue-300 underline">https://www.linkedin.com/in/naveenls/</a>
                        </p>
                        <p>
                            GitHub: <a href="https://github.com/naveenedoth" className="text-blue-300 underline">https://github.com/naveenedoth</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
