import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="f-con">
      <div className="blur blurf"></div>
      <div className="social-handler">
        <div className="head">
          <span>Find us in</span>
        </div>
        <ul className="list">
          <li>
            <a href="#">
              <FaInstagram className="icon"/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin className="icon"/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitterSquare className="icon"/>
            </a>
          </li>
          {/* <li><a href="#"><FaSquareFacebook/></a></li> */}
        </ul>
      </div>
      <div className="footer">
        <span>@ 2023 Created By UMMED CHOUDHARY</span>
      </div>
    </div>
  );
};
export default Footer;
