"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { TechstackCard } from "./techstack_card";

export const Slider = () => {
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
      <div className="keen-slider__slide">
        <TechstackCard />
      </div>
      <div className="keen-slider__slide">
        <TechstackCard />
      </div>
      <div className="keen-slider__slide">
        <TechstackCard />
      </div>
      <div className="keen-slider__slide">
        <TechstackCard />
      </div>
      <div className="keen-slider__slide">
        <TechstackCard />
      </div>
      <div className="keen-slider__slide">
        <TechstackCard />
      </div>
      <div className="keen-slider__slide">
        <TechstackCard />
      </div>
    </div>
  );
};
