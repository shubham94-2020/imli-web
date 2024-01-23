import React, { useState } from "react";
import "./poster.css";
import imageSlide from "../export_image_object/Image_object";

function Poster() {
  const [index, setIndex] = useState(0);

  // Function to go to the next index
  function goToNextIndex() {
    // Calculate the next index in a circular manner
    const nextIndex = (index + 1) % imageSlide.length;
    setIndex(nextIndex);
  }

  // Function to go to the previous index
  function goToPrevIndex() {
    // Calculate the previous index in a circular manner
    const prevIndex = (index - 1 + imageSlide.length) % imageSlide.length;
    setIndex(prevIndex);
  }

  const obj = {
    backgroundImage: `url(${imageSlide[index].url})`,
    backgroundPosition: "center",
    backgroundSize: "auto",
    height: "500px",
    width: "100%",
    backgroundRepeat: "no-repeat",
    transition: "background-image 0.4s ease",
  };

  return (
    <>
      <div className="counier-style">
        <div style={obj}>
          <div className="description">
            <div>
              <h1>{imageSlide[index].title}</h1>
              <h1>{imageSlide[index].body}</h1>
            </div>

            {/* <div className="carousal-boullt">
              {imageSlide.map((image, i) => (
                <span
                  key={i}
                  onClick={() => {
                    goToNextIndex(i);
                  }}
                ></span>
              ))}
            </div> */}
            <div className="carousel-buttons">
              {/* Arrow button to go to the previous image */}
              <span
                className="arrow-button left arrow-box"
                onClick={goToPrevIndex}
              >
                &#8249;
              </span>
              {/* Mapping through imageSlide to create buttons for each image */}
              {imageSlide.map((_, i) => (
                <span
                  key={i}
                  onClick={() => {
                    // Call the function to go to the clicked index
                    setIndex(i);
                  }}
                ></span>
              ))}
              {/* Arrow button to go to the next image */}
              <span
                className="arrow-button right arrow-box"
                onClick={goToNextIndex}
              >
                &#8250;
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us">
        <h1>Why We are Here</h1>
        <div className="hrline">
          <img
            src="https://pehlayakshar.org/wp-content/uploads/2016/02/home_charity2_sep1.png"
            alt="Separator"
            title=""
          />
        </div>
        <div className="text">
          <label>
            Pehlay Akshar Foundation was started in 2008 with the core belief
            that every student has the right to an excellent education and gain
            the skills needed to be future-ready. Pehlay Akshar Foundation was
            started in 2008 with the core belief that every student has the
            right to an excellent education and gain the skills needed to be
            future-ready. Pehlay Akshar Foundation was started in 2008 with the
            core belief that every student has the right to an excellent
            education and gain the skills needed to be future-ready.
          </label>
        </div>
      </div>
      <hr />
      <div className="about-us">
        <h1>Who we are</h1>
        <div className="hrline">
          <img
            src="https://pehlayakshar.org/wp-content/uploads/2016/02/home_charity2_sep1.png"
            alt="Separator"
            title=""
          />
        </div>
        <div className="text">
          <label>
            Pehlay Akshar Foundation was started in 2008 with the core belief
            that every student has the right to an excellent education and gain
            the skills needed to be future-ready. Pehlay Akshar Foundation was
            started in 2008 with the core belief that every student has the
            right to an excellent education and gain the skills needed to be
            future-ready. Pehlay Akshar Foundation was started in 2008 with the
            core belief that every student has the right to an excellent
            education and gain the skills needed to be future-ready.
          </label>
        </div>
      </div>
    </>
  );
}

export default Poster;
