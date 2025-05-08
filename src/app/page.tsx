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
        <section className="fixed w-[275px] flex flex-col items-stretch h-full space-y-4">
          <div className="flex flex-col items-stretch h-full space-y-4 my-4">
            <Link className="p-2 text-2xl py-2 px-6" href={"/"}>
              <GrTwitter />
            </Link>
            {navigation_items.map((item) => (
              <Link
                key={item.title}
                className="hover:bg-white/10 transition duration-200 flex items-center justify-start w-fit text-2xl space-x-4 rounded-3xl py-2 px-6"
                href={`/${item.title.toLowerCase()}`}
              >
                <div>
                  <item.icon />
                </div>
                <div>{item.title}</div>
              </Link>
            ))}
            <button className="bg-primary hover:bg-primary/50 transition duration-200 w-full rounded-full m-4 p-4 text-2xl text-center">
              Tweet
            </button>
          </div>
          <div>at the bottom</div>
        </section>
        <main>home</main>
        <section>right sidebar</section>
      </div>
    </div>
  );
}
