"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AboutLayout({ children }) {
  const pathName = usePathname();
  var part = pathName.split("/").pop();

  return (
    <main className="flex flex-col gap-12 mt-24 lg:mt-[120px]">
      <section>
        <div className="container">
          <h1 className="font-bold mb-9 text-white text-3xl lg:text-5xl">
            About Me
          </h1>
          <h1 className="mb-2 text-white text-xl lg:text-3xl lg:mb-6">
            Hi! I&apos;m Radika Badragitha
            <span className="animate-waving_hand inline-block">👋</span>
          </h1>
          <p className="font-light mb-6 text-[12px] text-text_gray lg:text-lg">
            I am currently a student at{" "}
            <span className="relative inline-block font-bold origin-left p-1 text-white before:absolute before:bg-accent before:h-full before:w-full before:-z-10 before:left-0 before:top-0 before:animate-slide_x before:origin-left">
              Primakara University
            </span>
            , pursuing a degree in Computer Engineering and expected to graduate
            in 2021. Alongside my academic pursuits, I am deeply passionate
            about web development. Over the past three years, I have actively
            freelanced as a web developer, honing my skills and gaining
            practical experience in the field.
          </p>
          <p className="font-light text-[12px] text-text_gray lg:text-lg">
            As a{" "}
            <span className="relative inline-block font-bold origin-left p-1 text-white before:absolute before:bg-accent before:h-full before:w-full before:-z-10 before:left-0 before:top-0 before:animate-slide_x before:origin-left">
              Junior Developer
            </span>
            , I specialize in JavaScript and frameworks, fueled by a deep
            passion for technology. I perform well under pressure, using my
            quick learning ability to adapt and solve problems effectively. I
            prioritize efficient solutions, making me a valuable addition to any
            team
          </p>
        </div>
      </section>
      <section>
        <div className="container w-full lg:mt-[120px]">
          <nav className="flex justify-between">
            <Link
              href={`/about`}
              className={`text-xs text-white relative md:w-full ${
                part == "about"
                  ? "before:absolute before:bg-accent before:-bottom-3 before:content-[' '] before:h-[2px] before:left-0 before:w-[90%] lg:before:h-[4px] sm:before:w-[100%]"
                  : " text-white/45"
              } sm:text-center  lg:text-xl`}
            >
              working experiences
            </Link>
            <Link
              href={`/about/study`}
              className={`text-sm text-white relative md:w-full ${
                part == "study"
                  ? "before:absolute before:bg-accent before:-bottom-3 before:content-[' '] before:h-[2px] before:left-0 before:w-[90%] lg:before:h-[4px] sm:before:w-[100%]"
                  : " text-white/45"
              } sm:text-center  lg:text-xl`}
            >
              study experiences
            </Link>
            <Link
              href={`/about/community`}
              className={`text-sm text-white relative md:w-full ${
                part == "community"
                  ? "before:absolute before:bg-accent before:-bottom-3 before:content-[' '] before:h-[2px] before:left-0 before:w-[90%] lg:before:h-[4px] sm:before:w-[100%]"
                  : " text-white/45"
              } sm:text-center lg:text-xl`}
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
