import React from "react";
import LeftSidebar from "./components/LeftSidebar";
import { BsDot } from "react-icons/bs";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar />
        <main className="ml-[285px] flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600 px-6 py-2">
          <h1 className="text-xl font-bold my-2">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] border-gray-600 flex items-stretch py-4 space-x-2 relative">
            <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full h-full">
              <div className="border-gray-700">
                <input
                  className="w-full h-full text-2xl placeholder:text-gray-600 border-b-[0.5px] bg-transparent outline-none border-none"
                  type="text"
                  placeholder="What's happening?"
                />
              </div>
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="bg-primary hover:bg-primary/50 transition duration-200 w-full rounded-full px-4 py-2 text-lg font-bold text-center">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="border-b-[0.5px] border-gray-600 p-4 flex space-x-4"
              >
                <div>
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-1">
                    <div className="font-bold">Amirul Hossain</div>
                    <div>@amirul1709</div>
                    <div>
                      <BsDot />
                    </div>
                    <div>1 hour ago</div>
                  </div>
                  <div className="text-white text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente atque sunt ipsum quia veritatis. Deleniti nisi
                    inventore dolorum quibusdam, ut, dignissimos impedit ullam
                    facilis sequi reprehenderit libero. Voluptatibus, reiciendis
                    eligendi?
                  </div>
                  <div className="bg-slate-400 aspect-square w-full h-96 rounded-2xl"></div>
                  <div className="flex items-center space-x-2 w-full">
                    <div>C</div>
                    <div>R</div>
                    <div>L</div>
                    <div>S</div>
                    <div>SH</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <section>RIGHT SIDEBAR</section>
      </div>
    </div>
  );
}
