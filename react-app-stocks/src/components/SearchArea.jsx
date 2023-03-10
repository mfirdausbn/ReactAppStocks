import React from "react";
import Search from "./Search";

const SearchArea = ({ name }) => {
  return (
    <>
      <div>
        <h1 className="text-5xl">{name}</h1>
        <Search />
      </div>
    </>
  );
};

export default SearchArea;
