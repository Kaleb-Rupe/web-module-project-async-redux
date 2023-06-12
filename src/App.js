import React from "react";
import "./App.css";
import BitcoinPrice from "./components/bitcoinPrice";

function App() {
  return (
    <div className="App">
      <h1>
        Bitcoin Tracker <div className="Bitcoin">₿</div>
      </h1>
      <BitcoinPrice />
    </div>
  );
}

export default App;
