import React from "react";
import "./HeroImgStyles.css";
// import IntroImg from '../assets/intro-bg.jpg'
import IntroImg from "../assets/pexels-cottonbro-studio-5077047.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"></img>
      </div>
      <div className="content">
        <p>Hi, I'm Tanu Goel.</p>
        <h1>MERN stack Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
