import React from "react";
import "./ourmission.css";
import mission from "../asset/mission.webm";

const Ourmission = () => {
  return (
    <div className="mission-container">
      <div data-aos="fade-down" data-aos-delay="300" className="imagecontainer">
        <video autoPlay loop muted id="img4">
          <source src={mission} type="video/webm" />
        </video>
      </div>
      <div className="mission-text margin">
        <h1 data-aos="fade-right" className="mission-header">
          Our Mission
        </h1>
        <p data-aos="fade-left" className="mission-para">
          Overcoming expectations is our mission. We’re here to follow your
          vision and deliver a great product, on time and budget. Our commitment
          is to exceed your expectations every step of the way.
          <br />
          <br /> In today’s world, brand communication should be something
          customers really want to be involved with. We know how to connect with
          the public and create memorable experiences that they love.
          <br />
          <br /> The reason why we’re so proud of our mission is that it isn’t
          easy or simple, but we’re willing to bear the sacrifice to be
          successful.
        </p>
      </div>
    </div>
  );
};

export default Ourmission;
