"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { TechstackCard } from "./techstack_card";

export const Slider = () => {
  const techstack = [
    {
      title: "Tailwind CSS",
      desc: "CSS Frameworks",
      img: "assets/tailwindcss-logo.svg",
    },
    {
      title: "React JS",
      desc: "JS Frameworks",
      img: "assets/react-logo.svg",
    },
    {
      title: "Vue JS",
      desc: "JS Frameworks",
      img: "assets/vue-logo.svg",
    },
    {
      title: "Express JS",
      desc: "JS Frameworks",
      img: "assets/express-logo.svg",
    },
    {
      title: "Flutter",
      desc: "Dart Framework",
      img: "assets/flutter-logo.svg",
    },
    {
      title: "Python",
      desc: "Programming Language",
      img: "assets/python-logo.svg",
    },
    {
      title: "Laravel",
      desc: "PHP Framework",
      img: "assets/laravel-logo.svg",
    },
  ];

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 5,
        spacing: 3,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider relative">
      <div className="absolute backdrop-blur-sm h-full w-[80%] bg-black/70 right-0 z-10"></div>
      {techstack.map((items, index) => {
        return (
          <div key={index + items.title} className="keen-slider__slide">
            <TechstackCard
              title={items.title}
              desc={items.desc}
              img={items.img}
            />
          </div>
        );
      })}
    </div>
  );
};
