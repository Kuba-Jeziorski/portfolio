"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../utils/css";

const baseLinkClasses =
  "h-full text-lg py-2 border-b-3 transition-all duration-300 hover:text-primary-accent hover:border-b-primary-accent";

const linkClasses = (pathname: string, href: string) => {
  return cn(
    baseLinkClasses,
    pathname === href
      ? "text-primary-accent border-b-primary-accent"
      : "text-muted-text border-b-transparent",
  );
};

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="w-full bg-canvas-background pt-4 border-b border-b-slate-400/20 h-nav-height fixed top-0 left-0 shadow-[0_2px_4px_rgba(0,0,0,0.05)] z-50">
      <div className="w-full max-w-375 mx-auto h-full">
        <div className="w-full flex justify-between gap-6 h-full">
          <Link
            href="/"
            className="transition-all duration-300 hover:brightness-125"
          >
            <div className="flex flex-col">
              <p className="text-2xl leading-none font-bold text-primary-accent">
                Jakub Jeziorski
              </p>
              <p className="text-xs tracking-[1.75] text-secondary-text">
                Frontend developer
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/projects"
              className={linkClasses(pathname, "/projects")}
            >
              Projects
            </Link>
            <Link href="/stack" className={linkClasses(pathname, "/stack")}>
              Stack
            </Link>
            <Link href="/courses" className={linkClasses(pathname, "/courses")}>
              Courses
            </Link>
            <Link href="/cv" className={linkClasses(pathname, "/cv")}>
              CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
