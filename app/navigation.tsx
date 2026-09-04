"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./utils/css";

const baseLinkClasses =
  "text-xl pb-4 border-b-3 transition-all duration-300 hover:text-primary-accent hover:border-b-primary-accent";

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
    <div className="w-full pt-4 border-b border-b-slate-400/20">
      <div className="w-full max-w-375 mx-auto">
        <div className="w-full flex justify-end-safe gap-6">
          <div className="flex align-center gap-6">
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
