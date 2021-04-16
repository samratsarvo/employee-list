import React from "react";
import "./styles.css";
import Chart from "./chart";

export default function App() {

  return (
    <div className="App">
      <div className="header">
        React Employee Hierarchy Chart
        <span className="follow">          
        </span>
      </div>
      <div className="container">
        <Chart/>
      </div>
    </div>
  );
}