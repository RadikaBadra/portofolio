"use client";
import Image from "next/image";
export const ProjectCard = (props) => {
  return (
    <div className="bg-white/35 border border-white/45 p-[6px] lg:p-3 rounded">
      <div className="bg-gray-900 h-20 lg:h-40 rounded w-[120px] lg:w-60"></div>
      <div className="card-text mt-5">
        <h1 className="font-bold leading-none text-white text-sm lg:text-xl">
          {props.title}
        </h1>
        <span className="font-thin leading-none text-white text-[8px] lg:text-sm">
          {props.desc}
        </span>
      </div>

      <button className="bg-accent flex items-center justify-end mt-6 p-[6px] lg:p-2 rounded-full w-12 lg:w-16 hover:w-full">
        <Image
          className="h-[10px] lg:h-[17px] w-[10px] lg:w-[17px]"
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
