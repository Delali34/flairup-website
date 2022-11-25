import React from "react";
import Navbar from "../comp/Navbar";
import Message from "../comp/Message";
import Footer from "../comp/Footer";
import Aboutus from "../comp/mainpages/AboutUs";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Aboutus />
      <Message />
      <Footer />
    </div>
  );
};

export default AboutUs;
