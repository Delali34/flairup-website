import React from "react";
import "./What.css";
import jde from "../asset/jde.webm";
import jde1 from "../asset/jde.webp";
import "./video.css";
import "./Navbar.css";

const what = () => {
  return (
    <div className="container1">
      <div className="what-we" data-aos="fade-left">
        <h1 className="how-to">
          How We Work <span className="down">↓</span>{" "}
        </h1>
        <video
          autoPlay
          loop
          muted
          id="img1"
          className="animate__animated animate__zoomIn img1"
        >
          <source src={jde} type="video/webm" />
        </video>
        <div className="img-mobile">
          <img
            src={jde1}
            alt=""
            id="img2"
            className="animate__animated animate__zoomIn"
          />
        </div>
      </div>
    </div>
  );
};

export default what;
