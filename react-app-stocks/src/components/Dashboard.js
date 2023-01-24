import React from "react";
import Card from "./Card";

const Dashboard = () => {
  return (
    <div className="h-screen grid auto-rows-fr gap-6 p-10 font-quicksand">
      <div className="row-span-1 col-span-2">
        <Card>NavBar & Search</Card>
      </div>
      {/* <div className="row-span-4 col-span-1" >
        <Card>Chart</Card>
      </div> */}
      <div className="row-span-1 col-span-1">
        <Card>Data</Card>
      </div>
      <div className="row-span-3 col-span-1">
        <Card>Details & News</Card>
      </div>
    </div>
  );
};

export default Dashboard;
