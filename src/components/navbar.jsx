import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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

  return (
    <div className="m-auto w-[1080px]">
      <ul className="flex items-center justify-between py-9">
        <li>
          <Image
            src={`/logo.svg`}
            alt="Picture of the author"
            width={125}
            height={125}
            quality={100}
          />
        </li>
        <div className="items-center nav-items flex gap-7">
          {nav_items.map((items, index) => {
            return (
              <Link
                href={items.link}
                key={items.route_name + index}
                className="text-[18px]"
              >
                {items.route_name}
              </Link>
            );
          })}
          <li>
            <button className="bg-white font-semibold p-[10px_18px] rounded-[4px] text-[18px] text-primary">
              Get In Touch
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
}
