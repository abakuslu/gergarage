import React from 'react';
import Slider from './Slider';
import "./Sli.css";
import "./Button.css";
import {Button} from "./Button";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ServiceText from './ServiceText';
// import ServiceCard from "../ServiceCard";

function Sli() {
  return (
    <Router>
      <Slider />

      <div className="cont">
        <div className="ButtonService"></div>
      </div>
      <hr></hr>
      <ServiceText />
    </Router>
  );
}

export default Sli;










