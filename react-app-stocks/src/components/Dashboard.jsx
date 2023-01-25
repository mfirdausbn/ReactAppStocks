import React, { useEffect, useState, useContext } from "react";

import Card from "./Card";
import SearchArea from "./SearchArea";
import Details from "./Details";
import Overview from "./Overview";

import StockContext from "../context/StockContext";
import { fetchQuote, fetchStockDetails } from "../api/stock-api";
import Chart from "./Chart";

const Dashboard = () => {
  const ctx = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(ctx.stockSymbol);
        setStockDetails(result);
        console.log(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };
    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(ctx.stockSymbol);
        setQuote(result);
        console.log(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [ctx.stockSymbol]);

  return (
    //makes the page layout a grid of 2columns by 8 rows
    <div className="h-screen grid grid-cols-2 grid-rows-8 gap-6 p-10 font-quicksand bg-slate-500">
      <div className="row-span-1 col-span-2 ">
        <Card>NAVBAR HERE</Card>
      </div>
      <div className="row-span-2 col-span-1 ">
        <SearchArea name={stockDetails.name} />
      </div>
      <div className="row-span-3 col-1 ">
        <Details details={stockDetails} />
      </div>
      <div className="row-1 col-1">
        <Overview
          symbol={ctx.StockSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>
      <div className="row-span-4 col-span-2 bg-white">
        <Chart className="bg-white"/>
      </div>
    </div>
  );
};

export default Dashboard;
