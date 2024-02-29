export const AchievementCard = (props) => {
  return (
    <div className="flex gap-4 items-center">
      <h1 className="font-black text-[80px] text-text_accent">
        {props.number}
      </h1>
      <p className="text-[24px] w-[142px] text-text_accent">{props.desc}</p>
    </div>
  );
};

export default AchievementCard;
