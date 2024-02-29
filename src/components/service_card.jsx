export const ServiceCard = (props) => {
  return (
    <div className="bg-white/35 border border-white/45 flex gap-[25px] items-center px-3 py-4 relative w-[85%]">
      <div>
        <h1 className="font-bold text-[22px] text-white">{props.title}</h1>
        <span className="text-white">{props.desc}</span>
      </div>
      <div className="absolute animate-floating bg-white -bottom-2 flex h-16 items-center justify-center -right-8 w-16">
        <span className="text-2xl">{props.emote}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
