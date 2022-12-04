import React, { useState, useEffect } from "react";

import "./work.css";
const images = [
  { id: "1", imageName: "img3.webp", tag: "Websites" },
  { id: "1", imageName: "img1.webp", tag: "Artworks" },
  { id: "1", imageName: "img7.webp", tag: "Animations" },
  { id: "1", imageName: "img2.webp", tag: "Artworks" },
];

const Work = () => {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "All"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);
  return (
    <div data-aos="fade-up" className="workbackground">
      <div className="tags2">
        <div className="workheading">
          <h1>Some of our finest work</h1>
        </div>
        <div data-aos="flip-up" className="tag-buttons2">
          <div className="buttontag2">
            <TagButton
              name="All"
              handleSetTag={setTag}
              TagActive={tag === "All" ? true : false}
            />
            <h1 className={tag === "All" ? "activetagbutton" : "textundertext"}>
              1
            </h1>
          </div>
          <div data-aos="flip-up" className="buttontag2">
            <TagButton
              name="Artworks"
              handleSetTag={setTag}
              TagActive={tag === "Artworks" ? true : false}
            />
            <h1
              className={
                tag === "Artworks" ? "activetagbutton" : "textundertext"
              }
            >
              2
            </h1>
          </div>
          <div data-aos="flip-up" className="buttontag2">
            <TagButton
              name="Animations"
              handleSetTag={setTag}
              TagActive={tag === "Animations" ? true : false}
            />
            <h1
              className={
                tag === "Animations" ? "activetagbutton" : "textundertext"
              }
            >
              3
            </h1>
          </div>
          <div data-aos="flip-up" className="buttontag2">
            <TagButton
              name="Websites"
              handleSetTag={setTag}
              TagActive={tag === "Websites" ? true : false}
            />
            <h1
              className={
                tag === "Websites" ? "activetagbutton" : "textundertext"
              }
            >
              4
            </h1>
          </div>
        </div>
      </div>

      <div className="container-img">
        {filteredImages.map((image) => (
          <div data-aos="zoom-in" key={image.id} className="image-card2">
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
    </div>
  );
};
const TagButton = ({ name, handleSetTag, TagActive }) => {
  return (
    <button
      className={`tag-button ${TagActive ? "tagactivebutton" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name}
    </button>
  );
};
export default Work;
