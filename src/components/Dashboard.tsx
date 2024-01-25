import React from "react";
import HomeContainer from "./HomeContainer";
import SalesTrend from "./SalesTrend";
import TotalOrder from "./TotalOrder";
import TotalRefund from "./TotalRefund";
import AverageSales from "./AverageSales";
import TotalIncome from "./TotalIncome";
import LastOrder from "./LastOrder";
import TopPlatforms from "./TopPlatforms";

export default function Dashboard() {
  return (
    <div>
      <HomeContainer>
        <div className="w-full">
          <div className=" h-[374px] gap-[20px] flex">
            <div className="w-[60%] 2xl:w-[70%]">
              <SalesTrend />
            </div>
            <div className="flex flex-col w-[500px] gap-[16px]">
              <div className="flex gap-[16px]">
                <TotalOrder />
                <TotalRefund />
              </div>
              <div className="flex gap-[16px]">
                <AverageSales />
                <TotalIncome />
              </div>
            </div>
          </div>
          <div className="flex gap-[26px] mt-[20px] mb-[100px] ">
            <div className="w-[55.5%] 2xl:w-[70%]">
              <LastOrder />
            </div>
            <div className="xl:w-[500px] w-[500px]">
              <TopPlatforms />
            </div>
          </div>
        </div>
      </HomeContainer>
    </div>
  );
}
