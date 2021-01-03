import React, { useState } from "react";
import MagnifierSymbol from "../assets/search.svg";



const SearchBox = () => {
  
  const [cityName, setCityName] = useState("");

  const handleSubmit = (event) => {
    console.log(`${cityName}'s weather is searched.`);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  return (
    <form className="SearchBox" onSubmit={handleSubmit}>
      <span className="SearchBox__MagnifierSpan">
          <img 
            src={MagnifierSymbol}
            className="SearchBox__MagnifierSymbol"
            alt="magnifier symbol" />
      </span>
      <input 
        type="text"
        value={cityName}
        placeholder="Enter city"
        className="SearchBox__Input"
        onChange={handleChange}
      />
    </form>
  )
};

export default SearchBox;

// function SearchBox1(){
//   return (
//       <main className="search-main">
//           <div className="search-form-div">
//               <div className="search-box">
//                   <div className="magnifier-div">
//                       <div className="magnifier-wrapper">
//                           <span className="magnifier-symbol">
//                               <img src={MagnifierSymbol} alt="magnifier symbol" />
//                           </span>
//                       </div>
//                   </div>
//                   <div className="input-div">
//                       <input type="search" className="search-input-area" />
//                   </div>
//               </div>
//           </div>
//           <div className="search-buttons-wrapper">
//               <div className="search-buttons">
//                   <button type="button" id="mdi-search">MDI Search</button>
//                   <button type="button" id="feeling-lucky">I'm Feeling Lucky</button>
//               </div>
//           </div>
//       </main>
//   )
// }