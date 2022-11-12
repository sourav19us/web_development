import React from "react";
import logo from "./sourav.png";
import "./head.css";

export default function Header() {
  return (
    <div>
      <div className="classdiv1">
        <img className="souravimg" src={logo} alt="laoding" />
        <h1 id="h1">
          <em>Sourav Kumar Saini</em>
        </h1>
      </div>
    </div>
  );
}
