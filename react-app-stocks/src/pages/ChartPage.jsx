import React from "react";
import Chart from "../components/Chart";

const ChartPage = () => {
  return (
    <div className="h-screen grid grid-cols-2 grid-rows-5">
      <div className="col-span-2 row-span-4">
        <Chart />
      </div>
    </div>
  );
};

export default ChartPage;
