import Image from "next/image";

export const TechstackCard = () => {
  return (
    <div>
      <div className="bg-white h-44 p-9 rounded w-44">
        <Image
          src={"/assets/tailwindcss-logo.svg"}
          alt="blue arrow"
          width={100}
          height={100}
          quality={100}
        />
      </div>
      <h1 className="mb-2 mt-5 text-3xl text-white">Tailwind CSS</h1>
      <span className="font-light text-xl text-white">CSS Framework</span>
    </div>
  );
};
