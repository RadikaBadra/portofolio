"use client";

import { useMediaQuery } from "./use_query";

export const ServiceCard = (props) => {
  const isMobile = useMediaQuery(375);

  return (
    <div
      className="bg-white/35 border border-white/45 px-2 lg:px-3 py-2 lg:py-4 relative w-[85%]"
      data-aos="fade-right"
    >
      <div>
        <h1 className="font-bold text-base lg:text-[22px] text-white">
          {props.title}
        </h1>
        <span className="text-xs text-white">{props.desc}</span>
      </div>
      <div
        className={`${
          isMobile ? "animate-floating_phone" : "animate-floating"
        } absolute bg-white -bottom-1 lg:-bottom-2 flex h-12 lg:h-16 items-center justify-center -right-6 lg:-right-8 w-12 lg:w-16`}
      >
        <span className="text-xl lg:text-2xl">{props.emote}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
