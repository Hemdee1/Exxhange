import React from "react";

import StockBox from "../utils/StockBox";
import { BoxTickIcon } from "../assets/Icons";

export default function TotalOrder() {
  return (
    <div>
      <StockBox
        title="Total Order"
        Icon={<BoxTickIcon />}
        number={350}
        percentage="23,5"
        status="success"
      />
    </div>
  );
}
