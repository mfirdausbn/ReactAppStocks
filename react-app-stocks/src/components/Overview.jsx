import React from "react";
import Card from "./Card";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card>
      <span className="absolute left-1 top-1 text-lg text-neutral-400">{symbol}</span>
      <div className="w-full h-full flex items-center justify-around">
        <span className="text-3xl">
          ${price}
          <span>{currency}</span>
        </span>
        <span className={`${change >0 ? "text-lime-500" : "text-red-500"}`}>
            {change} <span>({changePercent}%)</span>
        </span>
      </div>
    </Card>
  );
};

export default Overview;
