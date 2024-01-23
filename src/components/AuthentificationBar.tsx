import { DropDownIcon } from "../assets/Icons";
export default function AuthentificationBar() {
  return (
    <div>
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
        <button className="ml-[12px]">
          <DropDownIcon />
        </button>
      </div>
    </div>
  );
}
