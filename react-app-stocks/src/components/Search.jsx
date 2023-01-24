import React, { useState } from "react";
import { mockSearchResults } from "../constants/mock";
import SearchResults from "./SearchResults";

const Search = () => {
  //input to store query input to search for stock data
  const [input, setInput] = useState("");
  //the array of objects that store the search results
  const [searchResults, setSearchResults] = useState(mockSearchResults.result);

  //function to fetchData using the api
  //   const fetchSearchResults = async (url) => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setSearchResults(data);
  //   };

  const clear = () => {
    setInput("");
    setSearchResults([]);
  };

  const updateSearchResults = () => {
    setSearchResults(mockSearchResults.result);
  };

  return (
    
      <div className="flex items-center my-4 border-2 rounded-md relative z-50 bg-white  ">
        <input
          type="text"
          value={input}
          className="w-full px-4 py-2 rounded-md"
          placeholder="Search stock..."
          onChange={(event) => {
            setInput(event.target.value);
          }}
          onSubmit={() => {
            updateSearchResults();
          }}
        ></input>
        {/* if theres an input the clear button will appear */}
        {input && (
          <button className="h-8 w-20 items-center bg-red-200 rounded-md" onClick={clear}>
            Clear
          </button>
        )}
        <button className="h-8 w-20 items-center bg-gray-500 rounded-md" onClick={updateSearchResults}>
          Search
        </button>

        {input && searchResults.length > 0 ? <SearchResults results={searchResults}/> : null}
      </div>
    
  );
};

export default Search;
