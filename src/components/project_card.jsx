"use client";
import Image from "next/image";
import Link from "next/link";
export const ProjectCard = (props) => {
  return (
    <div
      className="bg-white/35 border border-white/45 group p-[6px] lg:p-3 rounded"
      data-aos="fade-up"
    >
      <div
        className="bg-gray-900 bg-contain h-20 lg:h-40 rounded w-[120px] lg:w-60"
        // style={{
        //   backgroundImage: `url(${props.img})`,
        // }}
      >
        <Image
          className="duration-500 grayscale h-full transition-all w-full group-hover:grayscale-0"
          src={`/${props.img}`}
          width={100}
          height={100}
          alt="project logo"
        />
      </div>
      <div className="card-text mt-5">
        <h1 className="font-bold leading-none text-white text-sm lg:text-xl">
          {props.title}
        </h1>
        <span className="font-thin leading-none text-white text-[8px] lg:text-sm">
          {props.desc}
        </span>
      </div>

      <Link
        href={`${props.link}`}
        target="_blank"
        className="bg-accent duration-200 flex group items-center justify-end mt-6 p-[6px] lg:p-2 rounded-full transition-all w-12 lg:w-16 hover:w-full"
      >
        <Image
          className="h-[10px] lg:h-[17px] w-[10px] lg:w-[17px]"
          src={"/icons/arrow-white.svg"}
          alt="arrow-icon"
          width={17}
          height={17}
          quality={100}
        />
      </Link>
    </div>
  );
};

export default ProjectCard;
