import React from "react";
import Link from "next/link";
import { BiHomeCircle } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

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
      <div className="max-w-screen-lg w-full h-full flex relative">
        <section className="fixed w-72 flex flex-col">
          {navigation_items.map((item) => (
            <Link
              key={item.title}
              className="bg-white/50 flex items-center justify-center space-x-2 rounded-3xl p-4"
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
