"use client";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export const SeeMoreButton = () => {
  return (
    <button className="bg-white flex h-40 items-center justify-center rounded-full w-40">
      <Parallax rotate={[0, 360]}>
        <Image
          src={"/assets/circular-text.svg"}
          alt="circular text"
          width={140}
          height={140}
          quality={100}
        />
      </Parallax>

      <Image
        className="absolute hover:translate-x-2"
        src={"/assets/blue-arrow.svg"}
        alt="blue arrow"
        width={50}
        height={50}
        quality={100}
      />
    </button>
  );
};
