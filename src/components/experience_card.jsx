export default function ExperienceCard(props) {
  return (
    <div className="bg-white/35 border border-white/45 px-2 lg:px-3 py-2 lg:py-4 relative w-full">
      <div className="absolute bg-white -bottom-3 rounded-full flex items-center justify-center h-14 -right-3 w-14">
        <h1 className="font-bold text-white text-xl">{props.emote}</h1>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-white text-lg w-[65%]">{props.title}</h1>
        <h2 className="text-base text-white">{props.date}</h2>
      </div>
      <p className="font-thin mb-2 text-white">{props.position}</p>
      <p className="font-light text-sm text-white w-[90%]">{props.desc}</p>
    </div>
  );
}
