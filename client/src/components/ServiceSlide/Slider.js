import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./Sli.css";
function Slider() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="slider">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4000}
      >
        <div data-src="/images/img-2.jpg" />
        <div data-src="/images/img-3.jpeg" />
        <div data-src="/images/img-1.jpg" />
        <div data-src="/images/img-3.jpeg" />
      </AutoplaySlider>
    </div>
  );
}

export default Slider;
