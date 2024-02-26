import Image from "next/image";
import AchievementCard from "@/components/achievement_card";

export default function Home() {
  const achievements = [
    {
      number: "3",
      desc: "Completed Project",
    },
    {
      number: "3",
      desc: "Satisfied Client",
    },
    {
      number: "3",
      desc: "Years Experiences",
    },
    {
      number: "1",
      desc: "Ongoing Project",
    },
  ];

  return (
    <main className="flex flex-col gap-32 mt-[120px]">
      <section className="Hero">
        <div
          className="absolute bg-no-repeat h-full m-auto top-0 w-full -z-10"
          style={{
            backgroundImage: `url('/assets/bg-blue.svg')`,
          }}
        ></div>
        <div className="container text-center">
          <p className="mb-12px text-[20px] text-white">
            known as <span className="font-black text-white">Radika Badra</span>
          </p>
          <p className="font-black m-auto text-[50px] text-white w-[421px]">
            Junior Developer <span className="font-light">Based in</span>{" "}
            Indonesia
          </p>
          <p className="font-light text-[15px] text-white">
            Lorem ipsum dolor sit amet consectetur. Tellus dignissim et mi eget.
          </p>

          <Image
            className="m-auto mt-[33px]"
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
          {achievements.map((items, index) => {
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
          <div className="container"></div>
        </div>
      </section>
    </main>
  );
}
