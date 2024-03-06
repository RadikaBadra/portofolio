"use client";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export const SeeMoreButton = () => {
  return (
    <button className="bg-white flex group items-center justify-center p-2 rounded-full">
      <Parallax rotate={[0, 360]}>
        <Image
          className="h-[90px] lg:h-[140px] w-[90px] lg:w-[140px]"
          src={"/assets/circular-text.svg"}
          alt="circular text"
          width={140}
          height={140}
          quality={100}
        />
      </Parallax>

      <Image
        className="absolute duration-200 group-hover:translate-x-2 h-8 lg:h-[50px] transition-all w-8 lg:w-[50px]"
        src={"/assets/blue-arrow.svg"}
        alt="blue arrow"
        width={50}
        height={50}
        quality={100}
      />
    </button>
  );
};
