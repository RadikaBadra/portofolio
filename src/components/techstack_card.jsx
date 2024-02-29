import Image from "next/image";

export const TechstackCard = (props) => {
  return (
    <div>
      <div className="bg-white h-44 p-9 rounded w-44">
        <Image
          src={props.img}
          alt="techstak logo"
          width={100}
          height={100}
          quality={100}
        />
      </div>
      <h1 className="mb-2 mt-5 text-3xl text-white">{props.title}</h1>
      <span className="font-light text-sm text-white">{props.desc}</span>
    </div>
  );
};
