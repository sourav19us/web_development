import React from "react";
import logo from "./sourav.png";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div>
      <din className="container ">
        <img src={logo} alt="img loading" />
        <h1>
          <strong>
            <em>Sourav Kumar Saini</em>
          </strong>
        </h1>
      </din>
      <div className="container"></div>
    </div>
  );
}
