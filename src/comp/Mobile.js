import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./mobile.css";
import "./Navbar.css";
import right from "../asset/right.png";
import left from "../asset/left.png";
import second from "../asset/second.webp";
import strate from "../asset/strate.webp";
import get from "../asset/get.webp";
import last from "../asset/last.webp";

import "swiper/css";

const Carousel = () => {
  const swiperRef = useRef();

  return (
    <div className="mySwiper mobile-version">
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide className="rule1">
          <div className="next mobile-buttons">
            <h1 className="unearth">1. Unearth</h1>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <img src={right} alt="" />
            </button>
          </div>
          <div className="second">
            <img src={second} alt="" id="second" />
            <p>
              Before diving into the client’s project and its environment, we
              aim to understand target audience behaviors, why and how this
              product will benefit them and how it can be used by a user. This
              is crucial before begin anything.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rule1">
          <div className="next mobile-buttons">
            <h1 className="unearth">2. Strategize</h1>
            <div className="mobile-button">
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <img src={left} alt="" />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <img src={right} alt="" />
              </button>
            </div>
          </div>
          <div className="second">
            <img src={strate} alt="" id="third" />
            <p>
              Understanding the market, its trends and audience is essential to
              build a digital product. In this stage you will have to determine
              your target audience and work on the best strategies and design
              that would fit their needs most.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rule1">
          <div className="next mobile-buttons">
            <h1 className="unearth">3. Create</h1>
            <div className="mobile-button">
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <img src={left} alt="" />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <img src={right} alt="" />
              </button>
            </div>
          </div>
          <div className="second">
            <img src={get} alt="" id="fourth" />
            <p>
              Congratulations! You’re ready to start creating and delivering
              your product. This is where we will work very closely with you,
              providing detailed feedback, guidance and suggestions throughout
              the process.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rule1">
          <div className="next mobile-buttons">
            <h1 className="unearth">4. Delivery</h1>
            <div className="mobile-button">
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <img src={left} alt="" />
              </button>
            </div>
          </div>
          <div className="second">
            <img src={last} alt="" id="fifth" />
            <p>
              We will deliver your product to you perfectly, with all
              corrections made and ready for Launch.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Carousel;
