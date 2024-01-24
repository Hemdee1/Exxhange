import { MarkerIcon } from "../assets/Icons";

interface props {
  value: number;
}

export default function Marker({ value }: props) {
  return (
    <div>
      <div className="relative">
        <MarkerIcon />
        <p className="text-[12px] top-[2px] left-[18px] absolute font-Inter font-normal text-white">
          ${value}.000
        </p>
      </div>
    </div>
  );
}
