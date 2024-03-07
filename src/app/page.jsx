"use client";
import AchievementCard from "@/components/achievement_card";
import ServiceCard from "@/components/service_card";
import ProjectCard from "@/components/project_card";
import { SeeMoreButton } from "@/components/see_more_buttons";
import { Slider } from "@/components/slider";
import { Hero } from "@/components/hero";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const services = [
    {
      emote: "💻",
      title: "Web Development",
      desc: "Make a cool website",
    },
    {
      emote: "📱",
      title: "Mobile Development",
      desc: "Make a cool mobile apps",
    },
    {
      emote: "🧠",
      title: "Machine Learning Enthusiast",
      desc: "Interset making a ML model",
    },
  ];

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
    <main className="flex flex-col gap-14 lg:gap-[140px] mt-24 lg:mt-[110px] scrollbar-hide">
      <section id="Hero">
        <Hero />
      </section>

      <section id="Achievements">
        <div className="container flex flex-wrap gap-[16px] justify-center lg:justify-between">
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

      <section id="About">
        <div className="bg-ternary py-12 lg:py-[70px] w-full">
          <div className="container flex flex-col gap-7 lg:gap-0 lg:flex-row">
            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-between left lg:w-6/12">
              <div className="about-text">
                <h1 className="font-bold mb-8 lg:mb-[30px] leading-tight text-3xl text-center lg:text-left lg:text-[42px] text-white">
                  I’ve been developing website since 2021
                </h1>
                <p className="font-light px-7 lg:px-0 text-[14px] text-center lg:text-left lg:text-[16px] text-text_gray lg:w-10/12">
                  I am a junior developer with proficiency in JavaScript and
                  frameworks. I am passionate about technology, thrive under
                  pressure, and. My ability to quickly grasp new concepts
                  enhances my adaptability and problem-solving skills.
                </p>
              </div>
              <Link
                href={
                  "https://drive.google.com/uc?export=download&id=1vykSKBFdYOVJSGJabhynA1KKASXRrMdx"
                }
                className="before:ease group relative bg-accent mt-14 overflow-hidden rounded px-8 py-4 lg:py-4 text-center text-white before:absolute before:left-0 before:-ml-2 before:h-60 before:w-60 before: before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-200 hover:before:-rotate-180"
              >
                <span className="relative duration-200 font-semibold text-sm lg:text-base transition-all z-10 group-hover:text-black">
                  Download CV
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-6 items-center lg:items-end justify-between right w-full lg:w-6/12">
              {services.map((items, index) => {
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
