import React from "react";
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";
import Services from "../comp/mainpages/Services";
import Message from "../comp/Message";
const OurServicesPage = () => {
  return (
    <div>
      <Navbar />
      <Services />
      <Message />
      <Footer />
    </div>
  );
};

export default OurServicesPage;
