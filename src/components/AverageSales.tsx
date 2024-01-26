import StockBox from "../utils/StockBox";
import { CartIcon } from "../assets/Icons";

export default function AverageSales() {
  return (
    <StockBox
      Icon={<CartIcon />}
      number={1567}
      percentage="50,5"
      status="failure"
      title="Average Sales"
    />
  );
}
