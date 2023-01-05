import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import natours from "./../assets/natours.PNG";
import mapty from "./../assets/map.PNG";
const AboutContent = () => {
  return (
    <>
      <div className="about">
        <div className="left">
          <h1>Who Am I?</h1>
          <p>
            With 3+ years of software development experience, I have contributed
            to projects small and large,demonstrating my professionalism with
            reliability. Being a developer means understanding all the
            requirements of a project and finding the best way to implement it
            to a high-quality standard.
          </p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={natours} className="img" alt="true"></img>
            </div>
            <div className="img-stack bottom">
              <img src={mapty} className="img" alt="true"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
