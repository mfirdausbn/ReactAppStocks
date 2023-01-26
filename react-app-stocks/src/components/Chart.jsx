import React, { useState, useEffect } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartConfig } from "../constants/config";
import {
  convertUnixTimeStampToDate,
  convertDateToUnixTimeStamp,
  createDate,
} from "../helpers/date-helper";
import Card from "./Card";
import ChartFilter from "./ChartFilter";
import { fetchHistoricalData } from "../api/stock-api";
import StockContext from "../context/StockContext";
import { useContext } from "react";

const Chart = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("1W");
  const ctx = useContext(StockContext);

  //formatdata to pass into recharts
  //refer to finnhub documentation for the response attributes
  //toFixed to return it to set decimal places in parenthesis
  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimeStampToDate(data.t[index]),
      };
    });
  };

  //whenever stocksymbol or filter changes, useEffect triggers
  useEffect(() => {
    //getDateRange is for finding the start and end timestamp
    // e.g if user picks 1M, it will give the date 1mth ago to pass into API
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];

      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      const startTimestampUnix = convertDateToUnixTimeStamp(startDate);
      const endTimestampUnix = convertDateToUnixTimeStamp(endDate);

      return { startTimestampUnix, endTimestampUnix };
    };

    const updateChartData = async () => {
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange();
        const resolution = chartConfig[filter].resolution;
        const result = await fetchHistoricalData(
          ctx.stockSymbol,
          resolution,
          startTimestampUnix,
          endTimestampUnix
        );
        setData(formatData(result));
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    updateChartData();
  }, [ctx.stockSymbol, filter]);

  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {/* {console.log(Object.keys(chartConfig))}
        <ChartFilter text={"1D"} /> */}
        {Object.keys(chartConfig).map((item) => {
          return (
            <li key={item}>
              <ChartFilter
                text={item}
                active={filter === item}
                onClick={() => {
                  setFilter(item);
                }}
              />
            </li>
          );
        })}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgb(19 20 284)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="rgb(19 20 24)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fillOpacity={1}
            strokeWidth={0.5}
            fill="url(#chartColor)"
          />
          <Tooltip />
          <XAxis dataKey={"date"}/>
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
