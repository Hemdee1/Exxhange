import {
  StockSuccessIcon,
  UpSignalIcon,
  StockFailureIcon,
  DownSignalIcon,
} from "../assets/Icons";

interface props {
  Icon: JSX.Element;
  title: string;
  number: number;
  status: string;
  percentage: string;
}

export default function StockBox({
  Icon,
  number,
  percentage,
  status,
  title,
}: props) {
  return (
    <div>
      <div className="w-[239px] h-[179px] bg-white border border-[#EDF2F7] p-[16px] rounded-[14px]">
        <div className="flex justify-between items-center">
          <div className="w-[40px] flex items-center justify-center h-[40px] rounded-full border border-[#E6E6E6]">
            {Icon}
          </div>
          {status === "success" ? <StockSuccessIcon /> : <StockFailureIcon />}
        </div>
        <p className="mt-[10px] text-[18px] font-PlusJakarta font-medium text-[#898989]">
          {title}
        </p>
        <p className="mt-[5px] text-[#3A3F51] text-[24px] font-semibold">
          {number}
        </p>
        <div className="flex items-center justify-between">
          <div
            className={`${
              status == "success" ? "bg-[#34CAA51F]" : "bg-[#ED544E1F]"
            } w-[70px] flex items-center justify-center gap-[4px] h-[24px] mt-[10px]  rounded-r-full rounded-l-full`}
          >
            {status == "success" ? <UpSignalIcon /> : <DownSignalIcon />}
            <p
              className={`${
                status === "success" ? "text-[#34CAA5]" : "text-[#ED544E]"
              } text-[12px] font-medium font-PlusJakarta `}
            >
              {percentage}%
            </p>
          </div>
          <p className="text-[14px] font-normal font-Inter mt-[6px] text-[#606060]">
            vs. previous month
          </p>
        </div>
      </div>
    </div>
  );
}
