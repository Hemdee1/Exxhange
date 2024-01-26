import { AlertIcon } from "../assets/Icons";
import Calendar from "../utils/Calendar";
import AuthentificationBar from "./AuthentificationBar";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div>
      <div className="w-full fixed left-0 top-0 z-10 h-[88px] bg-[#FAFAFA] border-b border-[#E5EAEF] px-[20px] flex items-center gap-2 lg:justify-between justify-between sm:pl-[100px]">
        <p className="font-PlusJakarta sm:text-[20px] text-[15px] font-semibold text-[#26282C] leading-[28px]">
          Dashboard
        </p>
        <div className="sm:ml-0 ml-2 flex items-center">
          <div>
            <SearchBar />
          </div>

          <div className="lg:ml-[38px] lg:block hidden ml-2">
            <Calendar />
          </div>

          <button className="sm:h-[50px] h-[30px] w-[30px] sm:ml-[36px] ml-7 sm:w-[50px] rounded-full border flex justify-center items-center border-[#DADDDD]">
            <AlertIcon />
          </button>

          <div className="ml-[20px] sm:block hidden">
            <AuthentificationBar />
          </div>
        </div>
      </div>
    </div>
  );
}
