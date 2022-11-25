import React from "react";
import { Routes, Route } from "react-router-dom";
import OurWorkPage from "./routes/OurWorkPage";
import OurServicePage from "./routes/OurServicesPage";
import Home from "./routes/Home";
import AboutUs from "./routes/AboutUs";
import Contact from "./routes/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<OurWorkPage />} />
        <Route path="/services" element={<OurServicePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
