"use client";
import { Romanesco, Sansita } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TypeIt from "typeit-react";

const romanesco = Romanesco({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
  variable: "--font-romanesco",
});

const sansita_black = Sansita({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["900"],
});

export const Footer = () => {
  const pathName = usePathname();
  var part = pathName.split("/").pop();

  const nav = [
    {
      link: "https://www.linkedin.com/in/radika-badragitha-422101248/",
      image: "/icons/linked-in.svg",
    },
    {
      link: "https://www.instagram.com/prttyyby",
      image: "/icons/instagram.svg",
    },
    {
      link: "https://github.com/RadikaBadra",
      image: "/icons/github.svg",
    },
  ];

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-accent mt-[70px] lg:mt-[140px] py-6 lg:py-11 w-full h-full">
      <div className="container">
        <div
          className={`${
            part == "contact" ? "hidden" : "flex"
          } flex-col lg:flex-row gap-12 items-center justify-between py-12 lg:py-24`}
        >
          <TypeIt
            options={{
              speed: 100,
              loop: true,
            }}
            className="font-bold text-[37px] text-center lg:text-left
            lg:text-7xl text-white w-3/4"
          >
            LET’S CREATE
            <span className={sansita_black.className}> SOMETHING </span>
            <span className={romanesco.className}>COOL</span> TOGETHER🔥
          </TypeIt>
          <button className="bg-white font-semibold group px-6 lg:px-18 py-3 lg:py-4 rounded text-black">
            <p className="text-xl lg:text-2xl">
              contact me{" "}
              <span className="duration-200 inline-block transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                🚀
              </span>
            </p>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <Image
            className="h-[80px] lg:h-[100px] w-[80px] lg:w-[100px]"
            src={`/logo.svg`}
            alt="logo"
            width={125}
            height={125}
            quality={100}
          />
          <span className="lg:block hidden mb-3 text-white text-xs lg:text-base">
            © {year} RDK Dev. All rights reserved
          </span>

          <div className="flex gap-2 lg:gap-5 items-center justify-between">
            {nav.map((item, index) => {
              return (
                <Link
                  target="_blank"
                  key={index}
                  href={`${item.link}`}
                  className="bg-white flex h-12 items-center justify-center rounded-full w-12"
                >
                  <Image
                    className="h-[14px] lg:h-[17px] w-[14px] lg:w-[17px]"
                    src={item.image}
                    alt="socmed logo"
                    width={17}
                    height={17}
                    quality={100}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <p className="lg:hidden pt-[30px] text-center text-white text-xs">
          © 2024 RDK Dev. All rights reserved
        </p>
      </div>
    </div>
  );
};
