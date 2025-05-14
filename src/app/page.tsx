import React from "react";
import LeftSidebar from "./components/LeftSidebar";
import Main from "./components/Main";
import RightSidebar from "./components/RightSidebar";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="max-w-[80vw] w-full h-full flex relative">
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    </div>
  );
}
