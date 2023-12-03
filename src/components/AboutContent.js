import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import natours from "./../assets/natours.PNG";
import mapty from "./../assets/map.PNG";
const AboutContent = () => {
  return (
    <>
       <h1 className="heading">About me</h1>
      <div className="about">
       
        <div className="left">
          <h1>Who Am I?</h1>
          <p>
          Embarking on a 4+ years journey in software development, I've woven my passion into projects of every scale. I bring not just professionalism but a commitment to reliable code, ensuring each line resonates with excellence.

          As a developer, I see projects as opportunities for innovation. Beyond meeting requirements, I shape digital landscapes, navigating complexities for high-quality results.

          In the evolving tech world, I'm looking for an organization that values skills and pushes for growth. Excited about daily challenges that fuel continuous development.

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
