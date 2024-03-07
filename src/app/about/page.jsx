import ExperienceCard from "@/components/experience_card";

export default function AboutPage() {
  const works = [
    {
      title: "Benerin.id",
      desc: "Benerin.id is a startup that provides online technician services to customers.",
      date: "Sep 2023",
      emote: "💻",
      position: "Frontend Developer",
    },
  ];

  return (
    <section>
      <div className="container">
        <h1 className="mb-12 text-3xl text-white">Working Experiences</h1>
        <div className="flex flex-col gap-8 w-full md:flex-row md:flex-wrap md:justify-between">
          {works.map((item, index) => {
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
    </section>
  );
}
