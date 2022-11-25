import React from "react";
import "./message.css";

const message = () => {
  return (
    <div className="messagecontain">
      <div className="messagecontainer">
        <div data-aos="zoom-in" className="circle1">
          <a href="/Contact">
            {" "}
            <h1
              data-aos="fade-left"
              data-aos-delay="300"
              className="messagetext"
            >
              Tell us what you want
            </h1>
            <div data-aos="fade-left" data-aos-delay="300" class="arrow"></div>
          </a>
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="circle2"
        ></div>
        <div
          data-aos="fade-right"
          data-aos-delay="500"
          className="circle3"
        ></div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          className="circle4"
        ></div>
      </div>
    </div>
  );
};

export default message;
