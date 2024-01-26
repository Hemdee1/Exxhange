import { SearchIcon } from "../assets/Icons";

export default function SearchBar() {
  return (
    <form className="lg:w-[349px] w-[150px] lg:ml-0 ml-2 sm:h-[48px] h-[37px] rounded-[24px] border border-[#DADDDD] flex gap-[8px] items-center pl-[16px]">
      <button>
        <SearchIcon />
      </button>
      <input
        placeholder="Search..."
        className="font-Inter w-full bg-transparent lg:w-[290px] text-[16px]  font-normal  items-center outline-none justify-center"
      ></input>
    </form>
  );
}
