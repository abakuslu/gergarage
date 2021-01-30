import React from "react";
import "../../App.css";
import Footer from "../Footer";
import SimpleMap from "../SimpleMap";
export default function ContactUs() {
  return (
    <div>
      <div className="ContactUs">
        <h1>Contact Us</h1>
      </div>
      <div className="ContactUsContainer">
        <div className="ContactUsRow">
          <div className="CallUs">
            <h1>Call Us</h1>
            <p>Tel: 083xxxxxxx</p>
            <p>E-Mail:</p>
            <p>gersgarage2020@gmail.com</p>
          </div>
          <div className="VisitUs">
            <h1>Visit Us</h1>
            <p>30-34 Westmoreland St</p>
            <p>Dublin 2</p>
            <p>D02 HK35</p>
          </div>
          <div className="OpeningHours">
            <h1>Opening Hours</h1>
            <p>Mon - Sat: 8am - 5pm</p>
            <p>Sunday:Close</p>
          </div>
        </div>
      </div>
      <SimpleMap />
      <Footer />
    </div>
  );
}
