"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import routes from "../config/routes";

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    pathname === path
      ? "text-white font-semibold"
      : "text-gray-400 hover:text-white";

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 md:px-32 bg-gray-800">
      <Link
        href={routes.home}
        className="text-2xl font-bold text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-transparent bg-clip-text hover-delay"
      >
        Naveen L S
      </Link>

      <ul className="flex flex-col md:flex-row gap-4 md:gap-12 mt-4 md:mt-0">
        <li>
          <Link href={routes.home} className={linkClasses(routes.home)}>
            Home
          </Link>
        </li>
        <li>
          <Link href={routes.about} className={linkClasses(routes.about)}>
            About
          </Link>
        </li>
        <li>
          <Link href={routes.projects} className={linkClasses(routes.projects)}>
            Projects
          </Link>
        </li>
        <li>
          <Link href={routes.contact} className={linkClasses(routes.contact)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
