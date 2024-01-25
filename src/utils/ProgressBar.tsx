interface Props {
  bgcolor: string;
  valueNumber: number;
  valueString: string;
  title: string;
}

export default function ProgressBar({
  bgcolor = "#6160DC",

  valueNumber = 2500000,
  valueString = " $2,500,000",

  title = "Book Bazaar",
}: Props) {
  function calculatePercentage(value: number) {
    const total = 16666666.67;

    const percentage = (value / total) * 100;
    const width = (percentage / 100) * 452;
    return { width, percentage };
  }
  const { percentage, width } = calculatePercentage(valueNumber);

  const fillerStyles = {
    height: "100%",
    width: `${width}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    display: "block",
  };
  return (
    <div>
      <div className="mt-[20px]">
        <div className="text-[18px] font-semibold font-PlusJakarta text-[#22242C] mb-[17px]">
          {title}
        </div>
        <div className="block w-[100%] h-[12px] bg-[#F5F5F5] rounded-[40px] ">
          <span style={fillerStyles}></span>
        </div>
        <div className="flex justify-between items-center mt-[16px]">
          <p className="text-[18px] font-normal text-[#525252]">
            ${valueString}
          </p>
          <p className="text-[18px] font-normal text-[#525252]">
            {Math.floor(percentage)}%
          </p>
        </div>
      </div>
    </div>
  );
}
