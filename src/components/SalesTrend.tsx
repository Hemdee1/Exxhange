import React from "react";
import { DropDownIcon, LineIcon } from "../assets/Icons";
import Marker from "../utils/Marker";

export default function SalesTrend() {
  const YAxis = [
    "60.000",
    "50.000",
    "40.000",
    "30.000,",
    "20.000",
    "10.000",
    "5.000",
  ];

  const XAxis = [
    { month: "Jan", value: 17.0 },
    { month: "Feb", value: 31.0 },
    { month: "Mar", value: 40.0 },
    { month: "Apr", value: 35.0 },
    { month: "Mar", value: 19.0 },
    { month: "Jun", value: 52.0 },
    { month: "Jul", value: 19.0 },
    { month: "Aug", value: 22.0 },
    { month: "Sep", value: 42.0 },
    { month: "Oct", value: 13.0 },
    { month: "Nov", value: 40.0 },
    { month: "Dec", value: 32.0 },
  ];

  const getHeight = (value: number) => {
    return (value / 60) * 100;
  };

  return (
    <div className="w-[806px] h-[374px] bg-white border border-[#EDF2F7] px-[20px] rounded-[14px]">
      <div className="mt-[21.5px] flex justify-between mb-[21.5px]">
        <p className="text-[18px] font-semibold font-PlusJakarta text-[#26282C]">
          Sales Trends
        </p>
        <div className="flex items-center gap-[10px]">
          <p className="text-[14px] font-normal text-[#3A3F51]">Sort by : </p>
          <div className="w-[96px] h-[32px] flex items-center justify-center gap-[10px] border border-[#E1DFDF] rounded-[20px]">
            <p className="text-[12px] font-normal text-[#3A3F51] font-PlusJakarta">
              Weekly
            </p>
            <button>
              <DropDownIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="h-[255px] w-[719px] flex flex-col justify-between relative">
        {YAxis.map((data, i) => (
          <div key={i} className="flex gap-[23px] items-center">
            <p className="text-[12px] font-semibold text-[#B7B0B0] font-PlusJakarta">
              {data}
            </p>
            <span className="block">
              <LineIcon />
            </span>
          </div>
        ))}
        <div className="absolute bottom-[9px] h-[100%] flex items-end gap-[30px] w-full left-[70px]">
          {XAxis.map((data, i) => (
            <span
              key={i}
              style={{ height: ` ${getHeight(data.value)}%` }}
              className="block group relative h-[28%] w-[30px] rounded-t-full transition-all duration-500 hover:bg-gradient-to-t hover:from-white hover:to-[#34CAA5] bg-gradient-to-t from-[#34CAA51A] to-[#34CAA51A]"
            >
              <div className="absolute -top-[39px] group-hover:opacity-100 transition-all duration-500 -left-[27px] opacity-0">
                <Marker value={data.value} />
              </div>
              <div className="absolute -bottom-[30px] text-[14px] font-normal font-PlusJakarta text-[#B2ABAB]">
                {data.month}
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
