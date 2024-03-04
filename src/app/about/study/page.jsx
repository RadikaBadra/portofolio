import ExperienceCard from "@/components/experience_card";

export default function StudyPage() {
  const studies = [
    {
      title: "Primakara University",
      desc: "Majoring in Informatics Engineering",
      date: "Present",
      emote: "📚",
      position: "Student",
    },
    {
      title: "Vocational High School 1 Denpasar",
      desc: "Majoring in Software Engineering",
      date: "Aug 2021",
      emote: "📖",
      position: "Alumni",
    },
  ];

  return (
    <div className="container">
      <h1 className="mb-12 text-3xl text-white">Study Experiences</h1>
      <div className="flex flex-col gap-8">
        {studies.map((item, index) => {
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
