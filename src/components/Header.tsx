import { AlertIcon } from "../assets/Icons";
import Calendar from "../utils/Calendar";
import AuthentificationBar from "./AuthentificationBar";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div>
      <div className="w-full fixed left-0 top-0 z-10 h-[88px] bg-[#FAFAFA] border-b border-[#E5EAEF] px-[20px] flex items-center gap-2 lg:justify-between sm:pl-[100px]">
        <p className="font-PlusJakarta text-[20px] font-semibold text-[#26282C] leading-[28px]">
          Dashboard
        </p>
        <div className=" flex items-center">
          <div>
            <SearchBar />
          </div>

          <div className="lg:ml-[38px] sm:visible hidden ml-2">
            <Calendar />
          </div>

          <button className="h-[50px] sm:ml-[36px] ml-2 w-[50px] rounded-full border flex justify-center items-center border-[#DADDDD]">
            <AlertIcon />
          </button>

          <div className="ml-[20px] sm:visible hidden">
            <AuthentificationBar />
          </div>
        </div>
      </div>
    </div>
  );
}
