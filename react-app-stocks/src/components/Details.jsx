import React from "react";
import Card from "./Card";

const Details = ({details}) => {
    //doing this allows us to extract only the data that we wish to as stated below
  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    
  };

  return (
    <Card>
      <ul className="w-full h-full flex flex-col justify-between">
        {Object.keys(detailsList).map((item) => {
            return(
                <li key={item} className="flex-1 flex justify-between items-center">
                    <span>{detailsList[item]}</span>
                    <span>{details[item]}</span>
                </li>
            )
        })}
      </ul>
    </Card>
  );
};

export default Details;
