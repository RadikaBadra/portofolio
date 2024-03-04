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

  const line = [];
  const [isOpen, setIsOpen] = useState(false);

  for (var i = 0; i < 3; i++) {
    line.push(
      <div
        key={i}
        className="absolute bg-white duration-500 h-[3px] left-1/2 line rounded-[6px] top-1/2 transition-multiple w-full"
      ></div>
    );
  }

  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [onScroll]);

  return (
    <>
      <div
        className={`fixed top-0 w-full z-20
        ${
          scrollY > 50
            ? isOpen
              ? "bg-transparent"
              : "bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-30"
            : "bg-transparent"
        }
      `}
      >
        <ul className="container flex items-center justify-between">
          <li>
            <Image
              className="h-[70px] lg:h-[100px] w-[70px] lg:w-[100px]"
              src={`/logo.svg`}
              alt="Logo"
              width={125}
              height={125}
              quality={100}
            />
          </li>
          <nav className="lg:flex gap-7 items-center hidden">
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
              <Link
                href={
                  "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFlwcHvfRScsJskmzjQmgWtGsCXPXWRSnttDNNdXPXslVMbWxZQcQVgnMwqLVkQQDKDJB"
                }
                className="bg-white font-semibold p-[10px_18px] rounded-[4px] text-[18px] text-primary"
              >
                contact me 🚀
              </Link>
            </li>
          </nav>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={`hamburger-btn cursor-pointer h-[40px] w-[40px] md:hidden ${
              isOpen ? "close" : " "
            }`}
          >
            <div className="h-[30px] m-[5px] relative w-[30px]">{line}</div>
          </div>
        </ul>
      </div>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`fixed bg-black/55 duration-200 h-full transition-all w-full z-10 ${
          isOpen ? "top-[0%]" : "top-[-400%]"
        }`}
      >
        <nav className="bg-accent container flex flex-col gap-y-2 pb-[40px] pt-[80px]">
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
          <button className="bg-white font-semibold mt-4 p-[6px_14px] lg:p-[10px_18px] rounded-[4px] text-[18px] text-primary">
            contact me 🚀
          </button>
        </nav>
      </div>
    </>
  );
};
