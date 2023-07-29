import React from "react";
import Logo from "./../../assets/logo.png";
import "./Header.css";
import bars from "./../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menu, setmenu] = useState(false);
  return (
    <div className="header">
      <img src={Logo} className="logo"></img>
      {menu === false && mobile === true ? (
        <div>
          <img
            src={bars}
            style={{ width: "1.5rem", height: "1.5rem" }}
            onClick={() => {
              setmenu(true);
            }}
          ></img>
        </div>
      ) : (
        <ul className="header-menu">
          <li
            onClick={() => {
              setmenu(false);
            }}
          >
            HOME
          </li>
          <li>
            <Link
              onClick={() => {
                setmenu(false);
              }}
              to="programs"
              span={true}
              smooth={true}
            >
              PROGRAMS
            </Link>
          </li>
          <li>
                 <Link
              onClick={() => {
                setmenu(false);
              }}
              to="reasons"
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
          <Link
              onClick={() => {
                setmenu(false);
              }}
              to="plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
            
          </li>
          <li>
            <Link
              onClick={() => {
                setmenu(false);
              }}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonial
            </Link>
          </li>
          <li>
          <Link
              onClick={() => {
                setmenu(false);
              }}
              to="contact"
              span={true}
              smooth={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
