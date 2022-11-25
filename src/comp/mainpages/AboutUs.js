import React, { useState } from "react";
import "./AboutUs.css";
import about from "./about.webp";
import dela from "./dela.jpg";
import bigdoug from "./bigdog.jpg";

const AboutUs = () => {
  const [fixs, setFixs] = useState(false);
  function setFixed() {
    if (window.scrollY >= 1000) {
      setFixs(true);
    } else {
      setFixs(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <div className="page-nav">
      <section className="active11">
        <div className="aboutcontainer">
          <div data-aos="fade-up" className="AboutUs">
            <h1 className="About-title">About Us</h1>
            <p className="About-subtitle">
              Our talented team is obsessed with creativity, usability and
              quality. We create designs that excite the audience and make them
              feel comfortable. We know how to balance between beautiful design
              and practical usability — not any less and not any more.
            </p>
          </div>
          <div className="AboutUs2">
            <div data-aos="fade-up">
              <h1 className="About-title2">Simplicity</h1>
              <p className="About-subtitle2">
                We work with people who are passionate about design and
                development to create something that is easy to use, intuitive
                and beautiful. Our mission is to help our clients achieve their
                goals in the most efficient way possible.
              </p>
            </div>
            <div data-aos="flip-up">
              <img src={about} alt="" id="aboutimg" />
            </div>
          </div>
        </div>
      </section>
      <div className="team-section">
        <div className="team-subsection">
          <div>
            <h1 data-aos="fade-up" className="team-title">
              Our team
            </h1>
          </div>
          <div className="team-images">
            <div data-aos="zoom-in">
              <img src={bigdoug} alt="" id="teamimg" />
              <h1 className="team-name">Douglass</h1>
              <h1 className="team-role">Graphic Designer </h1>
              <i class="fa-solid fa-gamepad top-react-icons1">
                <p className="popup">Love playing games</p>
              </i>
              <i class="fa-solid fa-music top-react-icons1">
                <p className="popup">music makes me relax</p>
              </i>

              <i class="fa-solid fa-plane-arrival top-react-icons1">
                <p className="popup">Travelling gives me new ideas</p>
              </i>
            </div>
            <div data-aos="zoom-in" className="roles">
              <img src={dela} alt="" id="teamimg" />
              <h1 className="team-name">Ernest</h1>
              <h1 className="team-role">
                Frontend Developer/ Motion Designer{" "}
              </h1>
              <div></div>
              <i class="fa-solid fa-gamepad top-react-icons1">
                <p className="popup">Love playing games</p>
              </i>
              <i class="fa-solid fa-code top-react-icons1">
                <p className="popup">Love coding</p>
              </i>

              <i class="fa-solid fa-plane-arrival top-react-icons1">
                <p className="popup">Travelling gives me new ideas</p>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
