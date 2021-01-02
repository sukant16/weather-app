import React from "react";
import searchSymbol from "../assets/search.svg";

const handleSubmit = (event) => {
  console.log(event.target.value);
}

const SearchBox = () => {
  return (
    <div className="SearchBox">
      <input 
        type="text"
        onSubmit={handleSubmit}
        placeholder="Enter city name"
      />
    </div>
  )
};

export default SearchBox;