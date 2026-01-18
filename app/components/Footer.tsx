"use client";

import { usePathname } from "next/navigation";
import routes from "../config/routes";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          {pathname === routes.home
            ? "This website is made completely using Next.js and Tailwind CSS."
            : pathname === routes.contact
            ? "Copyright © 2024  |  NAVEEN L S"
            : null}
        </p>
      </div>
    </footer>
  );
}
