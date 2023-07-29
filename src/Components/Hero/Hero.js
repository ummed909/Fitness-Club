import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "./../../assets/newHero.png";
import Heart from "./../../assets/heart.png";
import Calories from "./../../assets/calories.png";
import Burn from "./../../assets/burn.png";
import BackAnimation from "./BackAnimation";
import NumberCounters from "number-counter";

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur blurh"></div>
      <div className="left-h">
        <Header />
        <div className="the-best">
          <div></div>
          <span>The Best fitness club in Jodhpur</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="strock-text">Stay</span>
            <span> fit and healthy</span>
          </div>
          <div>
            <span>with us</span>
          </div>
          <div>
            <span>
              I am the best trainer in jodhpour we provide best physics to our
              cutomer joun us for more information.join us for best shape your
              body
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounters
                end={140}
                start={100}
                delay="1"
                preFix="+"
                ></NumberCounters>
            </span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span> <NumberCounters
                end={40}
                start={10}
                delay="1"
                preFix="+"
                ></NumberCounters></span>
            <span>member joined</span>
          </div>
          <div>
            <span> <NumberCounters
                end={50}
                start={10}
                delay="1"
                preFix="+"
                ></NumberCounters></span>
            <span>fitness breances</span>
          </div>
        </div>

        <div className="hero-button">
          <div className="btn">Get Started</div>
          <div className="btn">Learn More</div>
        </div>
      </div>

      {/* right sode */}
      <div className="right-h">
        <button className="btn">Join now</button>
        <div className="heart-rate">
          <img src={Heart}></img>
          <san>Heart Rate</san>
          <span>116 BPM</span>
        </div>
        <img src={hero_image} className="hero_image"></img>
        {/* <img src={hero_image_back} className="hero_image_back"></img> */}
        <BackAnimation />
        <div className="calories">
          <img src={Burn}></img>
          <div>
            <span>Calories Burn</span>
            <span>220 kacl</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
