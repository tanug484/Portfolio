import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";
const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading="CONTACT"></HeroImg2>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
