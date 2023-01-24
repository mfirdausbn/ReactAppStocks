import React from "react";
import { mockCompanyDetails } from "../constants/mock";
import Card from "./Card";
import SearchArea from "./SearchArea";
import Details from "./Details";

const Dashboard = () => {
  return (
    //makes the page layout a grid of 2columns by 8 rows
    <div className="h-screen grid grid-cols-2 grid-rows-8 gap-6 p-10 font-quicksand">
      <div className="row-span-1 col-span-2">
      <Card>NAVBAR HERE</Card>
      </div>
      <div className="row-span-2 col-span-1">
      <SearchArea name={mockCompanyDetails.name} />
      </div>
      <div className="row-span-2 col-1 overflow-y-scroll">
      <Details details={mockCompanyDetails}/>
      </div>
      <div className="row-span-5 col-span-2" >
      <Card>Chart goes here</Card>
      </div>
    </div>
  );
};

export default Dashboard;
