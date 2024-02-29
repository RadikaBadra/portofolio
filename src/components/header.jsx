"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

export const Header = () => {
  const nav_items = [
    {
      route_name: "Home",
      link: "/",
    },
    {
      route_name: "About",
      link: "/about",
    },
    {
      route_name: "Works",
      link: "/works",
    },
  ];

  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-20
        ${
          scrollY > 50
            ? "bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-30"
            : "bg-transparent"
        }
      `}
    >
      <ul className="container flex items-center justify-between py-6">
        <li>
          <Image
            src={`/logo.svg`}
            alt="Logo"
            width={125}
            height={125}
            quality={100}
          />
        </li>
        <nav className="flex gap-7 items-center">
          {nav_items.map((items, index) => {
            return (
              <Link
                href={items.link}
                key={items.route_name + index}
                className="text-[18px] text-white"
              >
                {items.route_name}
              </Link>
            );
          })}
          <li>
            <button className="bg-white font-semibold p-[10px_18px] rounded-[4px] text-[18px] text-primary">
              contact me 🚀
            </button>
          </li>
        </nav>
      </ul>
    </div>
  );
};
