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
<<<<<<< HEAD
      <div className="flex flex-col gap-8 w-full md:flex-row md:flex-wrap lg:justify-between">
=======
      <div className="flex flex-col gap-8 w-full sm:flex-row sm:flex-wrap sm:justify-between">
>>>>>>> 807aa2d1089a0d1ba22064351c57c91d59eb0a7d
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
