"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AboutLayout({ children }) {
  const pathName = usePathname();
  var part = pathName.split("/").pop();

  return (
    <main className="flex flex-col gap-12 lg:gap-[140px] mt-24 lg:mt-[110px]">
      <section>
        <div className="container">
          <h1 className="font-bold mb-9 text-white text-3xl">About Me</h1>
          <h1 className="mb-2 text-white text-xl">Hi! I&apos;m Radika 👋</h1>
          <p className="font-light text-justify text-sm text-white">
            I am a junior developer with proficiency in JavaScript and
            frameworks. I am passionate about technology, thrive under pressure,
            and. My ability to quickly grasp new concepts enhances my
            adaptability and problem-solving skills.
          </p>
        </div>
      </section>
      <section>
        <div className="container w-full">
          <nav className="flex justify-between">
            <Link
              href={`/about`}
              className={`text-sm text-white relative w-full ${
                part == "about"
                  ? "before:absolute before:bg-accent before:-bottom-3 before:content-[' '] before:h-[2px] before:w-[90%]"
                  : " text-white/45"
              }`}
            >
              working experiences
            </Link>
            <Link
              href={`/about/study`}
              className={`text-sm text-white relative w-full ${
                part == "study"
                  ? "before:absolute before:bg-accent before:-bottom-3 before:content-[' '] before:h-[2px] before:w-[90%]"
                  : " text-white/45"
              }`}
            >
              study experiences
            </Link>
            <Link
              href={`/about/community`}
              className={`text-sm text-white relative w-full ${
                part == "community"
                  ? "before:absolute before:bg-accent before:-bottom-3 before:content-[' '] before:h-[2px] before:w-[90%]"
                  : " text-white/45"
              }`}
            >
              community experiences
            </Link>
          </nav>
        </div>
      </section>
      {children}
    </main>
  );
}
