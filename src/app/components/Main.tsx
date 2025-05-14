import { BsDot, BsThreeDots } from "react-icons/bs";
import { BiComment, BiHeart, BiShare } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";

export default function Main() {
  return (
    <main className="flex w-[50%] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600 px-6 py-2">
      <h1 className="text-xl font-bold p-4 backdrop-blur bg-black/10 sticky top-0">
        Home
      </h1>
      <div className="border-t-[0.5px] border-b-[0.5px] border-gray-600 flex items-stretch py-4 space-x-2 relative">
        <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
        <div className="flex flex-col w-full h-full">
          <div className="border-gray-700">
            <input
              className="w-full h-full text-xl placeholder:text-gray-600 border-b-[0.5px] bg-transparent outline-none border-none"
              type="text"
              placeholder="What's happening?"
            />
          </div>
          <div className="w-full justify-between items-center flex">
            <div></div>
            <div className="w-full max-w-[100px]">
              <button className="bg-primary hover:bg-primary/50 transition duration-200 w-full rounded-full px-4 py-2 text-lg font-bold text-center cursor-pointer">
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
            <div className="flex flex-col">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center space-x-1 w-full">
                  <div className="font-bold">Master Chief</div>
                  <div className="text-gray-400">@Chief</div>
                  <div className="text-gray-400">
                    <BsDot />
                  </div>
                  <div className="text-gray-400">1 hour ago</div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className="text-white text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente atque sunt ipsum quia veritatis. Deleniti nisi
                inventore dolorum quibusdam, ut, dignissimos impedit ullam
                facilis sequi reprehenderit libero. Voluptatibus, reiciendis
                eligendi?
              </div>
              <div className="bg-slate-400 aspect-square w-full h-96 rounded-2xl mt-2"></div>
              <div className="flex items-center justify-between space-x-2 w-full mt-4">
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
                  <BiComment />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
                  <AiOutlineRetweet />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
                  <BiHeart />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
                  <IoMdStats />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
                  <BiShare />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
