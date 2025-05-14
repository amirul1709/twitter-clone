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
        <section className="sticky top-0 w-[30%] flex flex-col items-stretch h-screen px-4">
          <div className="mt-4">
            <div className="relative w-full h-full">
              <label
                className="absolute top-0 left-0 h-full flex items-center justify-center p-4"
                htmlFor="searchBox"
              >
                <BsSearch className="w-5 h-5 text-gray-500" />
              </label>
              <input
                className="w-full h-full rounded-xl py-4 pl-11 pr-4 outline-none bg-neutral-900 border focus:border-primary focus:border"
                id="searchBox"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  );
}
