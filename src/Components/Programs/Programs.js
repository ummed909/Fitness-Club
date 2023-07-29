import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "./../../assets/rightArrow.png"

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="program-header">
        <span className="strock-text">Explore our</span>
        <span>Programs</span>
        <span className="strock-text">to Shape You</span>
      </div>
      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="joinNow"><span>Join Now</span><img src={RightArrow}></img></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
