"use client"; // Add this line to make the component a Client Component

import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    {pathname === '/' 
                        ? 'This website is made completely using Next.js and Tailwind CSS.' 
                        : pathname === '/contact' 
                            ? 'Copyright © 2024  |  NAVEEN L S' 
                            : null}
                </p>
            </div>
        </footer>
    );
}
