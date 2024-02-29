import Image from "next/image";
import { promises as fs } from "fs";
import AchievementCard from "@/components/achievement_card";
import ServiceCard from "@/components/service_card";
import ProjectCard from "@/components/project_card";
import { SeeMoreButton } from "@/components/see_more_buttons";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/json/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <main className="flex flex-col gap-[70px] mt-[110px]">
      <section className="Hero">
        <div
          className="absolute bg-no-repeat h-full m-auto top-0 w-full -z-10"
          style={{
            backgroundImage: `url('/assets/bg-blue.svg')`,
          }}
        ></div>
        <div className="container text-center">
          <p className="mb-4 text-[20px] text-white">
            known as <span className="font-black text-white">Radika Badra</span>
          </p>
          <p className="font-black leading-tight m-auto text-[50px] text-white w-[421px]">
            Junior Developer <span className="font-light">Based in</span>{" "}
            Indonesia
          </p>
          <p className="font-light text-[15px] text-white">
            Lorem ipsum dolor sit amet consectetur. Tellus dignissim et mi eget.
          </p>

          <Image
            className="m-auto mt-[50px]"
            src={"/assets/profile.svg"}
            alt="profile picture"
            width={300}
            height={300}
            quality={100}
          />
        </div>
      </section>

      <section className="Achievements">
        <div className="container flex justify-between">
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

      <section className="About">
        <div className="bg-ternary py-[70px] w-full">
          <div className="container flex h-[440px]">
            <div className="flex flex-col justify-between left w-6/12">
              <div className="about-text">
                <h1 className="font-bold mb-[30px] text-[42px] text-white">
                  I’ve been developing website since 2021
                </h1>
                <p className="font-extralight text-[16px] text-white">
                  I am a junior developer with proficiency in JavaScript and
                  frameworks. I am passionate about technology, thrive under
                  pressure, and. My ability to quickly grasp new concepts
                  enhances my adaptability and problem-solving skills.
                </p>
              </div>
              <button className="bg-accent font-semibold rounded-[4px] py-4 text-[18px] text-white w-5/12">
                Get In Touch
              </button>
            </div>
            <div className="flex flex-col justify-between items-end right w-6/12">
              {data.services.map((items, index) => {
                return (
                  <ServiceCard
                    key={index + items.desc}
                    image={items.desc}
                    title={items.title}
                    desc={items.desc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="font-black mb-12 text-white text-5xl">Recent Works</h1>
          <div className="flex items-center justify-between">
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
            <SeeMoreButton />
          </div>
        </div>
      </section>
    </main>
  );
}
