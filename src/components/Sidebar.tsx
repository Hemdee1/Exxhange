import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  BoxIcon,
  CategoryIcon,
  DiscountIcon,
  LogoIcon,
  LogoutIcon,
  ProfileIcon,
  SettingIcon,
  SideIcon,
  TrendUpIcon,
} from "../assets/Icons";
import Theme from "../utils/Theme";
import { useOutsideClick } from "../utils/UseOutsideClick";

export default function Sidebar() {
  const [select, setSelect] = useState(1);
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const ref = useOutsideClick(() => setSidebarVisibility(false));

  useEffect(() => {
    if (sidebarVisibility) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [sidebarVisibility]);

  return (
    <>
      <div
        className={`fixed h-screen inset-0 w-full backdrop-blur-[2px] z-10 transition-opacity duration-500 ${
          sidebarVisibility ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
      <div
        ref={ref}
        className={`${
          sidebarVisibility === true ? "left-0 " : "-left-[70px]"
        } fixed sm:left-0 top-0 z-20 transition-all duration-500 `}
      >
        <div className="h-screen w-[80px] py-[20px]  bg-[#F7F8FA] border-r border-[#E5EAEF] flex flex-col justify-between">
          <div className="flex  flex-col gap-[32px]  justify-center items-center">
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
              <button
                onClick={() => {
                  setSidebarVisibility((prev) => !prev);
                }}
              >
                <SideIcon color={`${select == 1 ? "#0D062D" : "#F7F8FA"}`} />
              </button>
            </div>

            <div className="flex justify-end gap-[24px] w-full">
              <button
                onClick={() => {
                  setSelect(2);
                }}
              >
                <TrendUpIcon />
              </button>
              <button
                onClick={() => {
                  setSidebarVisibility((prev) => !prev);
                }}
              >
                <SideIcon color={`${select == 2 ? "#0D062D" : "#F7F8FA"}`} />
              </button>
            </div>

            <div className="flex justify-end gap-[24px] w-full">
              <button
                onClick={() => {
                  setSelect(3);
                }}
              >
                <ProfileIcon />
              </button>
              <button
                onClick={() => {
                  setSidebarVisibility((prev) => !prev);
                }}
              >
                <SideIcon color={`${select == 3 ? "#0D062D" : "#F7F8FA"}`} />
              </button>
            </div>

            <div className="flex justify-end gap-[24px] w-full">
              <button
                onClick={() => {
                  setSelect(4);
                }}
              >
                <BoxIcon />
              </button>
              <button
                onClick={() => {
                  setSidebarVisibility((prev) => !prev);
                }}
              >
                <SideIcon color={`${select == 4 ? "#0D062D" : "#F7F8FA"}`} />
              </button>
            </div>

            <div className="flex justify-end gap-[24px] w-full">
              <button
                onClick={() => {
                  setSelect(5);
                }}
              >
                <DiscountIcon />
              </button>
              <button
                onClick={() => {
                  setSidebarVisibility((prev) => !prev);
                }}
              >
                <SideIcon color={`${select == 5 ? "#0D062D" : "#F7F8FA"}`} />
              </button>
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
    </>
  );
}
