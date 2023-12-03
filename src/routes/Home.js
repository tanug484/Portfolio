import React, { lazy } from "react";
import AboutContent from "../components/AboutContent";
import Experience from "../components/Experience";
const Work=lazy(()=>import('../components/Work'))
const HeroImg = lazy(() => import('../components/HeroImg'))
const Navbar = lazy(() => import('../components/Navbar'))
const Footer = lazy(() => import('../components/Footer'))

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg></HeroImg>
      <AboutContent></AboutContent>
      <Work></Work>
      <Experience></Experience>
      <Footer></Footer>
    </div>
  );
};

export default Home;
