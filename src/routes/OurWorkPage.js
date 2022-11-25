import React from "react";
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";
import Work from "../comp/mainpages/Work";
import Message from "../comp/Message";

const OurWorkPage = () => {
  return (
    <div>
      <Navbar />
      <Work />
      <Message />
      <Footer />
    </div>
  );
};

export default OurWorkPage;
