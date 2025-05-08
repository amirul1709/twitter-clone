import React from "react";
import Link from "next/link";
import {
  BiHomeCircle,
  BiHash,
  BiBell,
  BiEnvelope,
  BiBookBookmark,
  BiUser,
} from "react-icons/bi";
import { GrTwitter } from "react-icons/gr";

const navigation_items = [
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: BiHash,
  },
  {
    title: "Notifications",
    icon: BiBell,
  },
  {
    title: "Messages",
    icon: BiEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BiBookBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <section className="fixed w-72 flex flex-col space-y-4 my-4">
          <Link className="p-2 text-2xl" href={"/"}>
            <GrTwitter />
          </Link>
          {navigation_items.map((item) => (
            <Link
              key={item.title}
              className="hover:bg-white/10 transition duration-200 flex items-center justify-start w-fit text-2xl space-x-4 rounded-3xl p-2"
              href={`/${item.title.toLowerCase()}`}
            >
              <div>
                <item.icon />
              </div>
              <div>{item.title}</div>
            </Link>
          ))}
        </section>
        <main>home</main>
        <section>right sidebar</section>
      </div>
    </div>
  );
}
