import React from "react";
import "./video.css";
import "./Navbar.css";
import vid from "../asset/vid.webm";
import thum from "../asset/thum.webp";
const video = () => {
  return (
    <div className="container">
      <div className="hero" data-aos="zoom-out-up">
        <h1 className="text-hero">
          We are committed to providing exceptional products, including{" "}
          <span className="text-bold animate__animated animate__flipInX">
            {" "}
            branding{" "}
          </span>
          ,{" "}
          <span className="text-bold animate__animated animate__flipInX">
            designs
          </span>
          ,{" "}
          <span className="text-bold animate__animated animate__flipInX">
            {" "}
            animation{" "}
          </span>{" "}
          and{" "}
          <span className="text-bold animate__animated animate__flipInX">
            website creation
          </span>
          , Bringing your ideas into reality.
        </h1>
        <div>
          <video
            controls
            preload="none"
            poster={thum}
            loop
            muted
            loading="lazy"
            id="video"
          >
            <source src={vid} type="video/webm" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default video;
