"use client";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div
        className="absolute lg:bg-contain bg-no-repeat h-full m-auto top-0 w-full -z-10"
        style={{
          backgroundImage: `url('/assets/bg-blue.svg')`,
        }}
      ></div>
      <div className="container" data-aos="zoom-in">
        <p className="mb-6 lg:text-[20px] text-center text-white">
          known as
          <span className="font-black text-white"> Radika Badra</span>
        </p>
        <h1 className="flex items-center justify-center text-3xl lg:text-6xl font-medium text-white">
          <span className="relative h-[1.1em] w-full overflow-hidden">
            <span className="absolute text-center h-full w-full -translate-y-full animate-slide leading-none text-white">
              Junior Developer
            </span>
            <span className="absolute text-center h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:0.83s]">
              Graphic Lover
            </span>
            <span className="absolute text-center h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:1.83s]">
              Good Son for Mother
            </span>
          </span>
        </h1>
        <p className="font-black leading-tight m-auto text-3xl lg:text-5xl text-center text-white lg:w-[421px]">
          <span className="font-light"> Based in </span>
          Indonesia
        </p>

        <Image
          className="m-auto mt-[50px] w-44 h-44 lg:h-[300px] lg:w-[300px]"
          src={"/assets/profile.svg"}
          alt="profile picture"
          width={300}
          height={300}
          quality={100}
          priority={true}
        />
      </div>
    </>
  );
};
