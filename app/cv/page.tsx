import Image from "next/image";
import Heading from "../components/ui/heading";
import Link from "next/link";

export default function CvPage() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Heading variant="h1">CV</Heading>
      <div className="w-full grid grid-cols-2 gap-4">
        <div className="flex items-stretch gap-4 rounded-2xl border border-slate-400/20 p-4">
          <Image
            src="/cv-image.jpg"
            alt="Jakub Jeziorski"
            width={250}
            height={250}
            className="rounded-xl"
          />
          <div className="flex flex-col">
            <Heading variant="h2">Jakub Jeziorski</Heading>
            <p className="text-secondary-text mb-3">Frontend developer</p>
            <p className="text-sm text-justify mb-3">
              Frontend Developer with 4+ years of commercial experience building
              responsive web applications and custom WordPress solutions.
              Experienced in React, TypeScript and modern frontend workflows.
              Passionate about performance, accessibility and writing
              maintainable code. Looking to grow as a React/TypeScript Frontend
              Engineer.
            </p>
            <div className="flex mt-auto">
              <Link
                target="_blank"
                href="/cv.pdf"
                className="flex px-4 py-2 font bg-primary-accent rounded-xl border-none transition-filter duration-300 hover:brightness-125"
              >
                See details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
