import React, { useState } from "react";
import second from "../asset/second.webm";
import strate from "../asset/strate.webm";
import get from "../asset/get.webm";
import last from "../asset/last.webm";
// import "swiper/css";
// import "swiper/css/navigation";

import "./toggle.css";
import "./What.css";
import "./Navbar.css";
const Toggle = () => {
  const Toggle = [
    "1. Unearth",
    "2. Strategize",
    "3. Work Begins",
    "4. Delivery",
  ];
  const [firstText, setFirstText] = useState("1. Unearth", false);
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  return (
    <div className="container2 first-element">
      <div className="element">
        <div className="button1">
          {Toggle.map((Toggles) => (
            <h2
              className={
                firstText === Toggles ? "active1 " : "toggleStyle respon"
              }
              key={Toggles}
              onClick={() => setFirstText(Toggles)}
            >
              {Toggles}
            </h2>
          ))}
        </div>
      </div>
      <div className="first-text">
        <div>
          {firstText === "1. Unearth" && <ToggleImage src={second} />}
          {firstText === "2. Strategize" && <ToggleImage src={strate} />}
          {firstText === "3. Work Begins" && <ToggleImage src={get} />}
          {firstText === "4. Delivery" && <ToggleImage src={last} />}
        </div>
        <div>
          {firstText === "1. Unearth" && (
            <h3 className="texting">
              Before diving into the client's project and its environment, we
              aim to understand target audience behaviors, why and how this
              product will benefit them and how it can be used by a user. This
              is crucial before begin anything.
            </h3>
          )}
          {firstText === "2. Strategize" && (
            <h3 className="texting">
              Understanding the market, its trends and audience is essential to
              build a digital product. In this stage you will have to determine
              your target audience and work on the best strategies and design
              that would fit their needs most.
            </h3>
          )}
          {firstText === "3. Work Begins" && (
            <h3 className="texting">
              Congratulations! You’re ready to start creating and delivering
              your product. This is where we will work very closely with you,
              providing detailed feedback, guidance and suggestions throughout
              the process.
            </h3>
          )}
          {firstText === "4. Delivery" && (
            <h3 className="texting">
              We will deliver your product to you perfectly, with all
              corrections made and ready for Launch
            </h3>
          )}
        </div>
      </div>
      {/* <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mobile-version"
      >
        <SwiperSlide>
          <div className="image1">
            <img src={second} alt="" id="img1" />
          </div>
          <h1 className="first-title">Unearth</h1>
          <h3>
            {" "}
            Before diving into the client's project and its environment, we aim
            to understand target audience <br /> behaviors, why and how this
            product will benefit them and how it can be used by a user. This is
            crucial before begin anything.
          </h3>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper> */}
    </div>
  );
};
const ToggleImage = ({ src }) => {
  return (
    <video autoPlay loop muted id="firstimg">
      <source src={src} type="video/webm" />
    </video>
  );
};

export default Toggle;
