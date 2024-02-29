"use client";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
export const ProjectCard = (props) => {
  const parallax =
    useParallax <
    HTMLDivElement >
    {
      rotate: [0, 360],
    };
  return (
    <div
      ref={parallax.ref}
      className="bg-white/35 border border-white/45 p-3 rounded"
    >
      <div className="bg-gray-900 h-40 rounded w-60"></div>
      <div className="card-text mt-5">
        <h1 className="font-bold text-white text-xl">{props.title}</h1>
        <span className="font-thin text-white text-sm">{props.desc}</span>
      </div>

      <button className="bg-accent flex items-center justify-end mt-6 p-2 rounded-full w-16 hover:w-full">
        <Image
          src={"/icons/arrow-white.svg"}
          alt="arrow-icon"
          width={17}
          height={17}
          quality={100}
        />
      </button>
    </div>
  );
};

export default ProjectCard;
