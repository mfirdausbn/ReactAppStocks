import React from "react";
import { useContext } from "react";
import StockContext from "../context/StockContext";

const SearchResults = ({ results }) => {
  const ctx = useContext(StockContext);

  return (
    <ul className="absolute top-12 border-2 w-full rounded-md h-32 overflow-y-scroll bg-white border-neutral-200">
      {results.map((item) => {
        if (item.symbol.length < 5) {
          return (
            <li
              key={item.symbol}
              className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-gray-200"
              onClick={() => {
                ctx.setStockSymbol(item.symbol);
              }}
            >
              <span>{item.symbol}</span>
              <span>{item.description}</span>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default SearchResults;
