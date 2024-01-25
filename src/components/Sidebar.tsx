import { useState } from "react";
import {
  ArrowRightIcon,
  BoxIcon,
  BrightnessIcon,
  CategoryIcon,
  DiscountIcon,
  LogoIcon,
  LogoutIcon,
  MoonIcon,
  ProfileIcon,
  SettingIcon,
  SideIcon,
  TrendUpIcon,
} from "../assets/Icons";
import Theme from "../utils/Theme";

export default function Sidebar() {
  const [select, setSelect] = useState(1);
  return (
    <div className="fixed left-0 top-0 z-20">
      <div className="h-screen w-[80px] mt-[20px] bg-[#F7F8FA] border-r border-[#E5EAEF] flex flex-col justify-between">
        <div className="flex flex-col gap-[32px] justify-center items-center">
          <button>
            <LogoIcon />
          </button>

          <div className="flex justify-end gap-[24px] w-full">
            <button
              onClick={() => {
                setSelect(1);
              }}
            >
              <CategoryIcon />
            </button>
            <div>
              <SideIcon color={`${select == 1 ? "#0D062D" : "#F7F8FA"}`} />
            </div>
          </div>

          <div className="flex justify-end gap-[24px] w-full">
            <button
              onClick={() => {
                setSelect(2);
              }}
            >
              <TrendUpIcon />
            </button>
            <div>
              <SideIcon color={`${select == 2 ? "#0D062D" : "#F7F8FA"}`} />
            </div>
          </div>

          <div className="flex justify-end gap-[24px] w-full">
            <button
              onClick={() => {
                setSelect(3);
              }}
            >
              <ProfileIcon />
            </button>
            <div>
              <SideIcon color={`${select == 3 ? "#0D062D" : "#F7F8FA"}`} />
            </div>
          </div>

          <div className="flex justify-end gap-[24px] w-full">
            <button
              onClick={() => {
                setSelect(4);
              }}
            >
              <BoxIcon />
            </button>
            <div>
              <SideIcon color={`${select == 4 ? "#0D062D" : "#F7F8FA"}`} />
            </div>
          </div>

          <div className="flex justify-end gap-[24px] w-full">
            <button
              onClick={() => {
                setSelect(5);
              }}
            >
              <DiscountIcon />
            </button>
            <div>
              <SideIcon color={`${select == 5 ? "#0D062D" : "#F7F8FA"}`} />
            </div>
          </div>

          <button
            onClick={() => {
              setSelect(7);
            }}
          >
            <Theme />
          </button>
        </div>

        <div
          className="flex flex-col gap-[32px] items-center
        justify-center "
        >
          <button>
            <ArrowRightIcon />
          </button>
          <button>
            <SettingIcon />
          </button>
          <button>
            <LogoutIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
