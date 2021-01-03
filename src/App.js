import React from "react";
import SearchBox from "./components/SearchBox";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Weather App</h1>
      </header>
      <main>
        <SearchBox />
      </main>   
      <footer className="App__Footer">
        <p className="Copyright">&#169; 2020 Sukant Arora. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
