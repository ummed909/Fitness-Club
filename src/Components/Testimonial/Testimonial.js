import React from "react";
import { useState } from "react";
import "./Tesstimonial.css";
import leftArrow from "./../../assets/leftArrow.png";
import rightArrow from "./../../assets/rightArrow.png";

import TestimonialData, {
  testimonialsData,
} from "./../../data/testimonialsData";
const Testimonial = () => {
  const [selected, setselected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonial" id="testimonials">
      <div className="blur blurt"></div>
      <div className="left-t">
        <span>Testimonial</span>
        <spna className="strock-text">What they</spna>
        <span>say about me</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image}></img>
        <div className="arrows">
          <img
            src={leftArrow}
            onClick={() => {
              selected === 0
                ? setselected(tLength - 1)
                : setselected((prev) => prev - 1);
            }}
          ></img>
          <img
            src={rightArrow}
            onClick={() => {
              selected != tLength - 1
                ? setselected((prev) => prev + 1)
                : setselected(0);
            }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
