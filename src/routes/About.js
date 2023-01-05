import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import Experience from "../components/Experience";
const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading="ABOUT ME"></HeroImg2>
      <AboutContent></AboutContent>
      <Experience></Experience>
      <Footer></Footer>
    </div>
  );
};

export default About;
