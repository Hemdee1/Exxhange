import { ViewIcon } from "../assets/Icons";

export default function LastOrder() {
  const data = [
    {
      images: "./images/1.png",
      name: "Marcus Bergson",
      date: "Nov 15, 2023",
      amount: "$80,000",
      status: "Paid",
      invoice: "View",
    },
    {
      images: "./images/2.png",
      name: "Jaydon Vaccaro",
      date: "Nov 15, 2023",
      amount: "$150,000",
      status: "Refund",
      invoice: "View",
    },
    {
      images: "./images/3.png",
      name: "Corey Schleifer",
      date: "Nov 14, 2023",
      amount: "$87,000",
      status: "Paid",
      invoice: "View",
    },
    {
      images: "./images/4.png",
      name: "Cooper Press",
      date: "Nov 14, 2023",
      amount: "$100,000",
      status: "Refund",
      invoice: "View",
    },

    {
      images: "./images/5.png",
      name: "Phillip Lubin",
      date: "Nov 13, 2023",
      amount: "$78,000",
      status: "Paid",
      invoice: "View",
    },
  ];
  return (
    <div>
      <div className="sm:w-full  h-fit pb-[31px] px-[20px]  border border-[#EDF2F7] bg-white rounded-[14px]">
        <div className=" flex justify-between mt-[18px] ">
          <span className="block text-[18px] font-semibold text-[#26282C] font-PlusJakarta">
            Last Orders
          </span>
          <button className=" text-[#34CAA5] text-[18px] font-PlusJakarta font-medium">
            See All
          </button>
        </div>
        <div className="overflow-x-scroll scrollbar-hide">
          <div className="flex justify-between w-[800px] mt-[14px] ">
            <span className="block text-[16px] w-[216px] h-[] font-medium text-[#9CA4AB] font-PlusJakarta">
              Name
            </span>
            <span className="block text-[16px] w-[116px] font-medium text-[#9CA4AB] font-PlusJakarta">
              Date
            </span>
            <span className="block text-[16px] font-medium w-[120px] text-[#9CA4AB] font-PlusJakarta">
              Ammount
            </span>
            <span className="block text-[16px] font-medium w-[95px] text-[#9CA4AB] font-PlusJakarta">
              Status
            </span>
            <span className="block text-[16px] font-medium text-[#9CA4AB] w-[80px] font-PlusJakarta ml-[]">
              Invoice
            </span>
          </div>

          <div>
            <div className="w-[800px] h-fit">
              {data.map((data, i) => (
                <div
                  key={i}
                  className="flex border-t pt-[12px] border-[#EDF2F6] justify-between mt-[33px] "
                >
                  <div className="flex items-center w-[216px] gap-[10px]">
                    <img src={data.images} alt="avatar" />
                    <span className="block text-[16px]  h-[] font-medium text-[#3A3F51] font-PlusJakarta">
                      {data.name}
                    </span>
                  </div>
                  <span className="block text-[16px] w-[116px] font-medium text-[#9CA4AB] font-PlusJakarta">
                    {data.date}
                  </span>
                  <span className="block text-[16px] font-medium w-[120px] text-[#0D062D)] font-PlusJakarta">
                    {data.amount}
                  </span>
                  <span
                    className={`${
                      data.status == "Paid"
                        ? "text-[#34CAA5]"
                        : "text-[#ED544E]"
                    } block text-[16px] font-medium w-[95px]  font-PlusJakarta`}
                  >
                    {data.status}
                  </span>
                  <div className=" w-[80px] flex gap-[3px] items-center">
                    <ViewIcon />
                    <p className="text-[#0D062D] text-[16px] font-PlusJakarta font-medium">
                      {data.invoice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
