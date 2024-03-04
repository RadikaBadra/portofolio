import Image from "next/image";

export const TechstackCard = (props) => {
  return (
    <div>
      <div className="bg-white flex h-24 items-center justify-center lg:h-44 lg:p-9 rounded w-24 lg:w-44">
        <Image
          className="h-[60px] lg:h-[100px] w-[60px] lg:w-[100px]"
          src={props.img}
          alt="techstak logo"
          width={100}
          height={100}
          quality={100}
        />
      </div>
      <h1 className="leading-none lg:mb-2 mt-4 lg:mt-5 text-base lg:text-3xl text-white">
        {props.title}
      </h1>
      <span className="font-light leading-none text-[8px] lg:text-base text-white">
        {props.desc}
      </span>
    </div>
  );
};
