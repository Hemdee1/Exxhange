import ProgressBar from "../utils/ProgressBar";

export default function TopPlatforms() {
  const data = [
    {
      title: "Book Bazaar",
      valueNumber: 2500000,
      valueString: " $2,500,000",
      bgcolor: "#6160DC",
    },
    {
      title: "Artisan Aisle",
      valueNumber: 1800000,
      valueString: " $1,800,000",
      bgcolor: "#54C5EB",
    },
    {
      title: "Toy Troop",
      valueNumber: 1200000,
      valueString: " $1,2000,000",
      bgcolor: "#FFB74A",
    },
    {
      title: "XStore",
      valueNumber: 2500000,
      valueString: " $2,500,000",
      bgcolor: "#ED544E",
    },
  ];

  return (
    <div>
      <div className="w-[488px] h-[542px] border px-[20px] fixed  border-[#EDF2F7] bg-white rounded-[14px]">
        <div className=" flex justify-between mt-[18px] mb-2 ">
          <span className="block text-[18px] font-semibold text-[#26282C] font-PlusJakarta">
            Top Platform
          </span>
          <button className=" text-[#34CAA5] text-[18px] font-PlusJakarta font-medium">
            See All
          </button>
        </div>
        <div className="h-[448px] overflow-scroll scrollbar-hide">
          {data.map((data, i) => (
            <ProgressBar
              bgcolor={data.bgcolor}
              title={data.title}
              valueNumber={data.valueNumber}
              valueString={data.valueString}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
