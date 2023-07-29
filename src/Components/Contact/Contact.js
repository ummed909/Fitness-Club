import React from "react";
import { useState, useRef } from "react";
import "./Contact.css";
import img from "./../../assets/contactImg.png";
import emailjs from "@emailjs/browser";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const Contact = () => {
  const form = useRef();
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [errMsg, setErrMsg] = useState("");
  // const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    console.log("done")
    if (username === "") {
      // setErrMsg("Username is required!");
      enqueueSnackbar("Username is required!!");
    } else if (phoneNumber === "") {
      // setErrMsg("Phone number is required!");
      enqueueSnackbar("Phone number is required");
    } else if (email === "") {
      // setErrMsg("Please give your Email!");
      enqueueSnackbar("Please give your Email!");
    } else if (!emailValidation(email)) {
      // setErrMsg("Give a valid Email!");
      enqueueSnackbar("Give a valid Email!");
    } else if (message === "") {
      // setErrMsg("Message is required!");
      enqueueSnackbar("Message is required!!");
    } else {
      // emailjs
      //   .sendForm(
      //     "service_4bo9h7c",
      //     "template_x2l5o45",
      //     form.current,
      //     "qxchQc7FvT4KaXKJf"
      //   )
      //   .then(
      //     (result) => {
      //       console.log("done");
      //     },
      //     (error) => {
      //       console.log(error.text);
      //     }
      //   );

      enqueueSnackbar("Your message sed sucessfull");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div className="container" id="contact">
      <SnackbarProvider />
      <div className="heading">
        <span>Contact us</span>
      </div>
      <div className="icontainer">
        <div className="left-c">
          <div className="il-container">
            <img src={img} className="imgh"></img>
            <span>Fitness Club</span>
            <span>
              I am the best trainer in jodhpour we provide best physics to our
              hnkfnksd fkshfnks lsddl ffg{" "}
            </span>
            <span>Email : fitnessclub123@gmail.com</span>
            <span>Location : India</span>
            <span>Phone no. 9887697959</span>
            <span></span>
          </div>
        </div>
        <div className="right-c">
          <div className="form-container">
            <span>Send Your massage</span>
            <form className="form">
              <input
                className="input1"
                placeholder="Name"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                name="user_name"
              ></input>
              <input
                className="input1"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="user_email"
              ></input>
              <input
                className="input1"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                name="number"
              ></input>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name="message"
                rows="6"
                id="input1"
                placeholder="Your massage"
              ></textarea>
              <button
                className="btn"
                style={{ color: "rgb(0,225,0)" }}
                onClick={handleSend}
              >
                SEND MESSAGE
              </button>
            </form>
            {/* <div className="blur blurc"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
