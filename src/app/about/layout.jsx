"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AboutLayout({ children }) {
  const pathName = usePathname();
  var part = pathName.split("/").pop();

  return (
    <main className="flex flex-col gap-12 mt-24 lg:gap-[100px] lg:mt-[120px]">
      <section>
        <div className="container">
          <h1
            className="font-bold mb-9 text-white text-3xl lg:text-5xl"
            data-aos="fade-up"
          >
            About Me
          </h1>
          <h1
            className="mb-2 text-white text-xl lg:text-3xl lg:mb-6"
            data-aos="fade-up"
          >
            Hi! I&apos;m Radika Badragitha
            <span className="animate-waving_hand inline-block">👋</span>
          </h1>
          <p
            className="font-light text-[12px] text-text_gray lg:text-lg"
            data-aos="fade-up"
          >
            As a junior developer, I excel in JavaScript and frameworks, driven
            by a passion for technology. I thrive under pressure, leveraging
            quick learning to enhance adaptability and problem-solving. My
            approach is focused on efficient, effective solutions, making me a
            valuable asset to any team.
          </p>
        </div>
      </section>
      <section>
        <div className="container w-full">
          <nav className="flex justify-between">
            <Link
              href={`/about`}
              className={`text-sm text-white relative lg:w-full ${
                part == "about"
                  ? "before:absolute before:bg-accent before:-bottom-3 before:content-[' '] before:h-[2px] before:left-0 before:w-[90%] lg:before:h-[4px] lg:before:w-[100%]"
                  : " text-white/45"
              } lg:text-center  lg:text-xl`}
            >
              working experiences
            </Link>
            <Link
              href={`/about/study`}
              className={`text-sm text-white relative lg:w-full ${
                part == "study"
                  ? "before:absolute before:bg-accent before:-bottom-3 before:content-[' '] before:h-[2px] before:left-0 before:w-[90%] lg:before:h-[4px] lg:before:w-[100%]"
                  : " text-white/45"
              } lg:text-center  lg:text-xl`}
            >
              study experiences
            </Link>
            <Link
              href={`/about/community`}
              className={`text-sm text-white relative lg:w-full ${
                part == "community"
                  ? "before:absolute before:bg-accent before:-bottom-3 before:content-[' '] before:h-[2px] before:left-0 before:w-[90%] lg:before:h-[4px] lg:before:w-[100%]"
                  : " text-white/45"
              } lg:text-center lg:text-xl`}
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
