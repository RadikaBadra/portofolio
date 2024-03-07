import ProjectCard from "@/components/project_card";

export default function Works() {
  const projects = [
    {
      title: "FIREMATE",
      desc: "mobile app for firefighters",
      img: "assets/firemate.svg",
      link: "https://drive.google.com/uc?export=download&id=1qpnbtc3hLg2vqrWvP8CI4kql3UqnQI28",
    },
    {
      title: "BENERIN.ID",
      desc: "technician booking platform",
      img: "assets/benerinid.svg",
      link: "https://benerin.id/",
    },
    {
      title: "NOTHEHING",
      desc: "online notes website",
      img: "assets/notehing.svg",
      link: "https://github.com/RadikaBadra/notehing_app",
    },
  ];

  return (
    <main className="flex flex-col gap-12 mt-24 lg:gap-[100px] lg:mt-[120px] min-h-[560px]">
      <section>
        <div className="container">
          <h1
            className="font-bold mb-8 text-white text-3xl lg:text-5xl"
            data-aos="fade-up"
          >
            Projects
          </h1>
          <h1
            className="font-thin mb-3 text-text_gray text-xl lg:text-3xl lg:mb-6"
            data-aos="fade-up"
          >
            Here is all my works
          </h1>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 m-auto w-[95%] lg:w-full">
            {projects.map((items, index) => {
              return (
                <ProjectCard
                  key={index + items.title}
                  title={items.title}
                  desc={items.desc}
                  img={items.img}
                  link={items.link}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
