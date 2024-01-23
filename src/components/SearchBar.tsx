import { SearchIcon } from "../assets/Icons";

export default function SearchBar() {
  return (
    <div>
      <form className="w-[349px] h-[48px] rounded-[24px] border border-[#DADDDD] flex gap-[8px] items-center pl-[16px]">
        <button>
          <SearchIcon />
        </button>
        <input
          placeholder="Search..."
          className="font-Inter w-[290px] text-[16px] font-normal  items-center outline-none justify-center"
        ></input>
      </form>
    </div>
  );
}
