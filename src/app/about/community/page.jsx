import ExperienceCard from "@/components/experience_card";

export default function CommunityPage() {
  const communities = [
    {
      title: "Primakara Developers",
      desc: "Developer Community at Primakara University",
      date: "Present",
      emote: "✨",
      position: "Lead Facilitators",
    },
    {
      title: "GDSC Primakara University",
      desc: "A Community for Developers formed by Google at Primakara University ",
      date: "Present",
      emote: "💪",
      position: "Core Team",
    },
  ];

  return (
    <div className="container">
      <h1 className="mb-12 text-3xl text-white">Community Experiences</h1>
<<<<<<< HEAD
      <div className="flex flex-col gap-8 w-full md:flex-row md:flex-wrap lg:justify-between">
=======
      <div className="flex flex-col gap-8 w-full sm:flex-row sm:flex-wrap sm:justify-between">
>>>>>>> 807aa2d1089a0d1ba22064351c57c91d59eb0a7d
        {communities.map((item, index) => {
          return (
            <ExperienceCard
              key={index + item.title}
              title={item.title}
              date={item.date}
              desc={item.desc}
              emote={item.emote}
              position={item.position}
            />
          );
        })}
      </div>
    </div>
  );
}
