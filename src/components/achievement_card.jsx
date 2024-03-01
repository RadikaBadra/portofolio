export const AchievementCard = (props) => {
  return (
    <div className="flex gap-2 lg:gap-4 items-center">
      <h1 className="font-black text-5xl lg:text-[80px] text-text_accent">
        {props.number}
      </h1>
      <p className="text-[16px] lg:text-[24px] w-24 lg:w-[142px] text-text_accent">
        {props.desc}
      </p>
    </div>
  );
};

export default AchievementCard;
