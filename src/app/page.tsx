import React from "react";
import LeftSidebar from "./components/LeftSidebar";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar />
        <main>home</main>
        <section>right sidebar</section>
      </div>
    </div>
  );
}
