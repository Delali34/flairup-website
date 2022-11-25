import React from "react";
import "./services.css";
import { BiMessageSquare } from "react-icons/bi";
import { FaPaintBrush } from "react-icons/fa";
import { MdInsertPhoto, MdBrandingWatermark } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CgShapeRhombus } from "react-icons/cg";
import { RiComputerLine } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";

const Services = () => {
  return (
    <div data-aos="fade-up" className="service-container">
      <div>
        <h1 className="service-header">Services</h1>
      </div>
      <div className="service-wedo">
        <span>
          <h1 className="service-title">What we do</h1>
        </span>
        <p className="service-subtitle">
          We know that each project is unique—we work with you to understand
          your goals and vision, then we apply our expertise to make it a
          reality. We are experts in the field of web design, web development,
          and graphic design, so we can help you create a site that looks great,
          works well, and meets your objectives.
        </p>
      </div>
      <div className="service-design">
        <div>
          <div data-aos="flip-up">
            {" "}
            <BiMessageSquare color="#ffae00" size="3em" />
            <FaPaintBrush color="#ffae00" size="3em" />
          </div>

          <h1 className="service-logo">Logo Design</h1>
          <p className="service-sublogo">
            We believe that a good logo should be simple, memorable and convey
            the message you want to convey. We will help you with all this,
            while making sure that your logo is unique and original.
          </p>
        </div>
        <div>
          <div data-aos="flip-up">
            <MdInsertPhoto color="#ffae00" size="3em" />
            <AiOutlineLoading3Quarters color="#ffae00" size="3em" />
          </div>

          <h1 className="service-logo">Flyer Design</h1>
          <p className="service-sublogo">
            Our team is ready to make your flyers look amazing. We've got tons
            of experience creating flyers, so no matter what kind of business or
            event you're promoting, we'll do everything we can to help you
            succeed!
          </p>
        </div>
      </div>
      <div className="service-design">
        <div>
          <div data-aos="flip-down">
            {" "}
            <MdBrandingWatermark color="#ffae00" size="3em" />
            <CgShapeRhombus color="#ffae00" size="2em" />
          </div>

          <h1 className="service-logo">Branding</h1>
          <p className="service-sublogo">
            We help you create a unique specific sign for your product or
            service that differentiates you from the competition and creates a
            memorable experience for your customers.
          </p>
        </div>
        <div>
          <div data-aos="flip-down">
            <RiComputerLine color="#ffae00" size="3em" />
            <BsCodeSlash color="#ffae00" size="3em" />
          </div>

          <h1 className="service-logo">Web Development</h1>
          <p className="service-sublogo">
            We know you’re busy, so we’ve taken care of the technical details.
            Our team is ready to deploy your design in a way that makes it look
            pixel-perfect, so you can spend more time on the important stuff.
            And their support? It won’t let you down.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
