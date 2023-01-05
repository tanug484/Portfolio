import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading="PROJECTS"></HeroImg2>
      <Work></Work>
      <Footer></Footer>
    </div>
  );
};

export default Project;
