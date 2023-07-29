import React from "react";
import "./Reasons.css";
import image1 from "./../../assets/image1.png";
import image2 from "./../../assets/image2.png";
import image3 from "./../../assets/image3.png";
import image4 from "./../../assets/image4.png";
import nb from "./../../assets/nb.png";
import addidas from "./../../assets/adidas.png";
import nike from "./../../assets/nike.png";
import tick from "./../../assets/tick.png"

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1}></img>
        <img src={image2}></img>
        <img src={image3}></img>
        <img src={image4}></img>
      </div>
      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className="strock-text">why</span>
          <span> choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick}></img>
            <span>Over 140+ Export coaches</span>
          </div>
          <div>
          <img src={tick}></img>
            <span>train smarter and faster</span>
          </div>
          <div>
          <img src={tick}></img>
            <span>1 free program for new member</span>
          </div>
          <div>
          <img src={tick}></img>
            <span>reliable partner</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
