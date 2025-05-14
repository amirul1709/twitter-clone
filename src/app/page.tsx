import React from "react";
import LeftSidebar from "./components/LeftSidebar";
import Main from "./components/Main";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="max-w-[80vw] w-full h-full flex relative">
        <LeftSidebar />
        <Main />
        <section className="sticky top-0 overflow-scroll w-[30%] flex flex-col items-stretch h-screen px-4">
          <div className="mt-4">
            <div className="relative w-full h-full">
              <input
                className="w-full h-full rounded-xl py-4 pl-11 pr-4 outline-none bg-neutral-900 border-gray-600 border focus:border-primary focus:border peer"
                id="searchBox"
                type="text"
                placeholder="Search Twitter"
              />
              <label
                className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-primary"
                htmlFor="searchBox"
              >
                <BsSearch className="w-5 h-5" />
              </label>
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl p-4">{`What's happening`}</h3>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  className="hover:bg-white/10 transition duration-200 cursor-pointer p-4 last:rounded-b-xl"
                  key={i}
                >
                  <div className="font-bold text-lg">#trending {i}</div>
                  <div className="text-sm text-neutral-400">6.9k Tweets</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl p-4">Who to follow</h3>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  className="hover:bg-white/10 transition duration-200 cursor-pointer p-4 last:rounded-b-xl"
                  key={i}
                >
                  <div className="font-bold text-lg">#trending {i}</div>
                  <div className="text-sm text-neutral-400">6.9k Tweets</div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
}
