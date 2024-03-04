import { promises as fs } from "fs";
import AchievementCard from "@/components/achievement_card";
import ServiceCard from "@/components/service_card";
import ProjectCard from "@/components/project_card";
import { SeeMoreButton } from "@/components/see_more_buttons";
import { Slider } from "@/components/slider";
import { Hero } from "@/components/hero";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/json/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <main className="flex flex-col gap-14 lg:gap-[140px] mt-24 lg:mt-[110px]">
      <section id="Hero">
        <Hero />
      </section>

      <section id="Achievements">
        <div className="container flex flex-wrap gap-[16px] justify-center lg:justify-between">
          {data.achievements.map((items, index) => {
            return (
              <AchievementCard
                key={index + items.desc}
                number={items.number}
                desc={items.desc}
              />
            );
          })}
        </div>
      </section>

      <section id="About">
        <div className="bg-ternary py-12 lg:py-[70px] w-full">
          <div className="container flex flex-col gap-7 lg:gap-0 lg:flex-row">
            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-between left lg:w-6/12">
              <div className="about-text">
                <h1 className="font-bold mb-8 lg:mb-[30px] leading-tight text-3xl text-center lg:text-left lg:text-[42px] text-white">
                  I’ve been developing website since 2021
                </h1>
                <p className="font-extralight px-7 lg:px-0 text-[10px] text-center lg:text-left lg:text-[16px] text-white lg:w-10/12">
                  I am a junior developer with proficiency in JavaScript and
                  frameworks. I am passionate about technology, thrive under
                  pressure, and. My ability to quickly grasp new concepts
                  enhances my adaptability and problem-solving skills.
                </p>
              </div>
              <button className="bg-accent font-semibold mt-14 rounded py-4 text-lg text-white w-5/12">
                contact me 🚀
              </button>
            </div>
            <div className="flex flex-col gap-6 items-center lg:items-end justify-between right w-full lg:w-6/12">
              {data.services.map((items, index) => {
                return (
                  <ServiceCard
                    key={index + items.desc}
                    emote={items.emote}
                    title={items.title}
                    desc={items.desc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h1 className="font-black mb-12 text-center lg:text-left text-white text-3xl lg:text-5xl">
            Recent Works
          </h1>
          <div className="flex flex-wrap gap-4 lg:gap-0 items-center justify-center lg:justify-between m-auto w-[95%] lg:w-full">
            {data.projects.map((items, index) => {
              return (
                <ProjectCard
                  key={index + items.title}
                  title={items.title}
                  desc={items.desc}
                  img={items.image}
                />
              );
            })}
            <div className="p-3">
              <SeeMoreButton />
            </div>
          </div>
        </div>
      </section>

      <section id="techstacks">
        <div className="container">
          <h1 className="font-black mb-12 text-3xl text-white text-center lg:text-left lg:text-5xl">
            Techstacks
          </h1>
          <Slider />
        </div>
      </section>
    </main>
  );
}
