import { useState } from "react";
import { DropDownIcon } from "../assets/Icons";
export default function AuthentificationBar() {
  const [openDropdown, setOpendropdown] = useState(false);
  return (
    <div className="">
      <div className="w-[215px] h-[52px] border border-[#DADDDD] rounded-[28px] flex items-center">
        <img src="/images/avatar.png" alt="avatar" />
        <div>
          <p className="font-Inter text-[16px] ml-[16px] text-[#26282C] font-normal">
            Justin Bergson
          </p>
          <h1 className="text-[#787486] ml-[8px] font-Inter text-[14px] font-normal">
            Justin@gmail.com
          </h1>
        </div>
        <button
          onClick={() => {
            setOpendropdown((prev) => !prev);
          }}
          className="ml-[12px]"
        >
          <DropDownIcon />
        </button>
      </div>
      <div
        className={`absolute right-0 w-[230px] p-5  bg-white shadow border mr-2 mt-2 border-[#DADDD] rounded-lg transition-all duration-500 ${
          openDropdown
            ? "top-[70px] opacity-100 visible"
            : "top-[50px] opacity-0 invisible"
        }`}
      >
        <div className="flex gap-5">
          <span className="w-10 h-10 bg-gray-300 animate-pulse block rounded-full"></span>
          <div className="flex items-end flex-col gap-2">
            <span className="w-32 h-4 rounded-full d bg-gray-300 animate-pulse block"></span>
            <span className="w-32 h-4 rounded-full  bg-gray-300 animate-pulse block"></span>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <span className="w-full h-6 block bg-gray-300 animate-pulse rounded-xl"></span>
          <span className="w-full h-6 block  bg-gray-300 animate-pulse rounded-xl"></span>
          <span className="w-full h-6 block bg-gray-300 animate-pulse rounded-xl"></span>
          <span className="w-full h-6 block  bg-gray-300 animate-pulse rounded-xl"></span>
        </div>
      </div>
    </div>
  );
}
