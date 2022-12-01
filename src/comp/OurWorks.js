import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./ourworks.css";
import { SRLWrapper } from "simple-react-lightbox";
const images = [
  { id: "1", imageName: "img1.webp", tag: "Artworks" },
  { id: "1", imageName: "img2.webp", tag: "Artworks" },
  { id: "1", imageName: "img7.webp", tag: "Animations" },
  { id: "1", imageName: "img3.webp", tag: "Websites" },
];

const OurWorks = () => {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "All"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);
  return (
    <section className="work-background">
      <div data-aos="fade-up" className="workbackground">
        <div className="workhead">
          <h1>Our Works</h1>
        </div>
        <div data-aos="flip-up" className="tag-buttons">
          <div className="buttontag">
            <TagButton
              name="All"
              handleSetTag={setTag}
              TagActive={tag === "All" ? true : false}
            />
            <h1 className={tag === "All" ? "activetag" : "textunder"}>1</h1>
          </div>
          <div data-aos="flip-up" className="buttontag">
            <TagButton
              name="Artworks"
              handleSetTag={setTag}
              TagActive={tag === "Artworks" ? true : false}
            />
            <h1 className={tag === "Artworks" ? "activetag" : "textunder"}>
              2
            </h1>
          </div>
          <div data-aos="flip-up" className="buttontag">
            <TagButton
              name="Animations"
              handleSetTag={setTag}
              TagActive={tag === "Animations" ? true : false}
            />
            <h1 className={tag === "Animations" ? "activetag" : "textunder"}>
              3
            </h1>
          </div>
          <div data-aos="flip-up" className="buttontag">
            <TagButton
              name="Websites"
              handleSetTag={setTag}
              TagActive={tag === "Websites" ? true : false}
            />
            <h1 className={tag === "Websites" ? "activetag" : "textunder"}>
              41
            </h1>
          </div>
        </div>

        <SRLWrapper>
          <div className="containers">
            {filteredImages.map((image) => (
              <div data-aos="zoom-in" key={image.id} className="image-card">
                <a href={`/images/${image.imageName}`}>
                  <img
                    className="image"
                    src={`/images/${image.imageName}`}
                    alt=""
                  />
                </a>
              </div>
            ))}
          </div>
        </SRLWrapper>

        <div data-aos="fade-up" data-aos-duration="1000" className="cir">
          <a href="/work">
            {" "}
            <div className="lol ">
              <div className="circle"></div>
              View More
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
const TagButton = ({ name, handleSetTag, TagActive }) => {
  return (
    <button
      className={`tag ${TagActive ? "tagactive" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name}
    </button>
  );
};
export default OurWorks;
