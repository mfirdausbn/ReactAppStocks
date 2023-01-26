import React, { useState } from "react";
import SearchResults from "./SearchResults";
import { searchSymbols } from "../api/api-functions";

const Search = () => {
  //input to store query input to search for stock data
  const [input, setInput] = useState("");
  //the array of objects that store the search results
  const [searchResults, setSearchResults] = useState([]);

  const clear = () => {
    setInput("");
    setSearchResults([]);
  };

  const updateSearchResults = async () => {
    try {
      if (input) {
        const searchResult = await searchSymbols(input);
        const result = searchResult.result;
        setSearchResults(result);
        console.log(result);
      }
    } catch (error) {
      setSearchResults([]);
      console.log(error);
    }
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
        onSubmit={updateSearchResults}
      ></input>
      {/* if theres an input the clear button will appear */}
      {input && (
        <button
          className="h-8 w-20 items-center bg-red-200 rounded-md"
          onClick={clear}
        >
          Clear
        </button>
      )}
      <button
        className="h-8 w-20 items-center bg-gray-500 rounded-md"
        onClick={updateSearchResults}
      >
        Search
      </button>

      {input && searchResults.length > 0 ? (
        <SearchResults results={searchResults} />
      ) : null}
    </div>
  );
};

export default Search;
