"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const linkClasses = (path: string) => 
        pathname === path 
            ? "text-white font-semibold"
            : "text-gray-400 hover:text-white";
    return(
        <nav className="flex justify-between items-center p-4 px-32 bg-gray-800">
            <Link href="/" className="text-2xl font-bold text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-transparent bg-clip-text hover-delay">
            Naveen L S</Link>
            <ul className="flex gap-12">
                <li>
                    <Link href="/" className={linkClasses("/")}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={linkClasses("/about")}>About</Link>
                </li>
                <li>
                    <Link href="/projects" className={linkClasses("/projects")}>Projects</Link>
                </li>
                <li>
                    <Link href="/contact" className={linkClasses("/contact")}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}