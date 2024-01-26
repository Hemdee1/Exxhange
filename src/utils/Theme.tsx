import { LightIcon, MoonIcon } from "../assets/Icons";

export default function Theme() {
  return (
    <div className="w-[46px] h-[92px] bg-white flex items-center justify-center flex-col gap-[16px] rounded-t-[188px] rounded-b-[188px]">
      <span className="block">
        <LightIcon />
      </span>
      <span className="block">
        <MoonIcon />
      </span>
    </div>
  );
}
