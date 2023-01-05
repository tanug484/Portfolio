import "./FooterStyles.css";
import React from "react";
import { FaMailBulk, FaPhone, FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                ></FaPhone>
                +91 8574443380
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                ></FaMailBulk>
                tanug484@gmail.com
              </h4>
            </div>
            <div className="social">
              <a href="https://www.facebook.com/tanu.goel.777701">
                <FaFacebook
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" ,}}
                ></FaFacebook>
              </a>
              <a href="https://github.com/tanug484/">
                <AiFillGithub
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                ></AiFillGithub>
              </a>

              <a href="https://www.linkedin.com/in/tanu-goel-a6982b168/">
                <FaLinkedin
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                ></FaLinkedin>
              </a>

              <a href="https://www.instagram.com/im_goel/">
                <BsInstagram
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                ></BsInstagram>
              </a>
            </div>
          </div>
          <div className="right">
            <h4>Get in Touch</h4>
            <p>
              Do you have opportunities? I'm always open to new opportunities.
              Kindly use the button below to send me a message, and I'll try my
              best to address!
            </p>
            <a href="mailto:email@example.com" className="btn btn-light">
              Say Hello
            </a>
          </div>
        </div>
        <p className="build">Designed and Build by Tanu Goel</p>
      </div>
    </>
  );
};

export default Footer;
