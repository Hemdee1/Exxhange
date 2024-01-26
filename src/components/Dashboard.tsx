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
          <div className="flex-col lg:flex-row lg:h-[374px] gap-[20px] flex">
            <div className="sm:w-full overflow-x-scroll scrollbar-hide sm:overflow-visible  ">
              <SalesTrend />
            </div>
            <div className="flex flex-col w-full lg:w-[500px] gap-[16px]">
              <div className="flex sm:flex-row flex-col gap-[16px] w-full">
                <TotalOrder />
                <TotalRefund />
              </div>
              <div className="flex sm:flex-row flex-col gap-[16px] w-full">
                <AverageSales />
                <TotalIncome />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[26px] mt-[20px] mb-[100px] ">
            <div className="overflow-x-scroll scrollbar-hide sm:overflow-x-auto w-full">
              <LastOrder />
            </div>
            <div className="min-w-[400px] min-[1100px]:min-w-[500px]">
              <TopPlatforms />
            </div>
          </div>
        </div>
      </HomeContainer>
    </div>
  );
}
