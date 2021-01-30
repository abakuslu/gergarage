import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out Out Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jfif"
              text="Fastest Service Experience"
              label="Annual Service"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Get Major Service done then relax"
              label="Major Service"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="find the fault or fix quickly"
              label="Repair / Fault and"
              path="/services"
            />
            <CardItem
              src="images/img-3.jpeg"
              text="100% guarantee passing NCT in the first time"
              label="NCT"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
