import { ThreeDIcon } from "../assets/Icons";
import StockBox from "../utils/StockBox";

export default function TotalRefund() {
  return (
    <StockBox
      Icon={<ThreeDIcon />}
      number={270}
      percentage="15,5"
      status="failure"
      title="Total Refund"
    />
  );
}
