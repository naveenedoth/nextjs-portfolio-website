"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import routes from "../config/routes";
import { NAVBAR_ITEMS } from "../utils/constants";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-4 sm:px-8 md:flex-row md:px-10 lg:px-12">
        <Link
          href={routes.home}
          className="group no-underline text-2xl font-bold tracking-tight text-white transition-all duration-300"
        >
          <span className="bg-gradient-to-r from-white via-teal-200 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-teal-300 group-hover:via-cyan-300 group-hover:to-blue-400">
            Naveen L S
          </span>
        </Link>
        <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-6">
          <li>
            <Link
              href={routes.home}
              className={`rounded-full no-underline px-4 py-2 text-sm transition-all duration-300 ${
                pathname === routes.home
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {NAVBAR_ITEMS[0]}
            </Link>
          </li>
          <li>
            <Link
              href={routes.about}
              className={`rounded-full no-underline px-4 py-2 text-sm transition-all duration-300 ${
                pathname === routes.about
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {NAVBAR_ITEMS[1]}
            </Link>
          </li>
          <li>
            <Link
              href={routes.projects}
              className={`rounded-full no-underline px-4 py-2 text-sm transition-all duration-300 ${
                pathname === routes.projects
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {NAVBAR_ITEMS[2]}
            </Link>
          </li>
          <li>
            <Link
              href={routes.contact}
              className={`rounded-full no-underline px-4 py-2 text-sm transition-all duration-300 ${
                pathname === routes.contact
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {NAVBAR_ITEMS[3]}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
