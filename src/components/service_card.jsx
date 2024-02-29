import Image from "next/image";

export const ServiceCard = (props) => {
  return (
    <div className="bg-white flex gap-[25px] items-center p-3 w-[85%]">
      <Image
        src={`/assets/${props.image}.png`}
        alt="card image"
        width={75}
        height={75}
        quality={100}
      />
      <div>
        <h1 className="font-bold text-[22px]">{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
