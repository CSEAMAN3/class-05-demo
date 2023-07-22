import React from "react";
import "./Yoyo.css";

export default function Yoyo({ myName, footie, theName, display }) {
  return (
    <div>
      <h1>{myName}</h1>
      <p>My fav club is {footie}</p>
      <button onClick={() => theName("wrexham")}>Click me</button>
      <button onClick={display}>Show help</button>
    </div>
  );
}
