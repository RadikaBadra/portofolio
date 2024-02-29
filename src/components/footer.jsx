import { Romanesco, Sansita } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
  const nav = [
    {
      link: "",
      image: "/icons/linked-in.svg",
    },
    {
      link: "",
      image: "/icons/instagram.svg",
    },
    {
      link: "",
      image: "/icons/github.svg",
    },
  ];
  return (
    <div className="bg-accent mt-[140px] py-11 w-full h-full">
      <div className="container">
        <div className="flex items-center justify-between py-24">
          <h1 className="font-bold text-7xl text-white w-3/4">
            LET’S CREATE
            <span className={sansita_black.className}> SOMETHING </span>
            <span className={romanesco.className}>COOL</span> TOGETHER 🔥
          </h1>
          <button className="bg-white font-semibold h-20 py-4 rounded text-lg text-black w-60">
            <p className="text-2xl">contact me 🚀</p>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <Image
            src={`/logo.svg`}
            alt="Logo"
            width={125}
            height={125}
            quality={100}
          />
          <span className="text-white">
            © 2023 RDK Dev. All rights reserved
          </span>

          <div className="flex gap-5 items-center justify-between">
            {nav.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={""}
                  className="bg-white flex h-12 items-center justify-center rounded-full w-12"
                >
                  <Image
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
      </div>
    </div>
  );
};
