"use client";
import { usePathname } from "next/navigation";
import routes from "../config/routes";
import {
  FOOTER_HOMEPAGE_TEXT,
  FOOTER_CONTACTPAGE_TEXT,
} from "../utils/constants";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-5 py-5 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
          {pathname === routes.home
            ? FOOTER_HOMEPAGE_TEXT
            : pathname === routes.contact
              ? FOOTER_CONTACTPAGE_TEXT
              : null}
        </p>
      </div>
    </footer>
  );
}
