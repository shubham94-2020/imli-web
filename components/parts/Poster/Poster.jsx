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
      {/* why we are here section */}
      <div className="about-us">
        <h1>Why we are here</h1>
        <div className="hrline">
          <img
            src="https://pehlayakshar.org/wp-content/uploads/2016/02/home_charity2_sep1.png"
            alt="Separator"
            title=""
          />
        </div>
      </div>
      <div className="why-we-are-here">
        <div className="section">
          <img src="img1.jpg" alt="Image 1" />
          <p>
            Language is at the core of everything we do – it shapes how kids
            learn and how we connect as humans. In India, a nation steeped in a
            rich linguistic heritage, our commitment extends beyond preparing
            children for the communication challenges of today. Our languages,
            intricately woven into the fabric of our culture and identity, hold
            the keys to our heritage. As parents or educators, this is the goal
            we all share: our children should learn and communicate well.
            Whether it's a local dialect or a national language, Language is an
            invaluable resource within the classroom
          </p>
        </div>
        <div className="section">
          <p>
            Despite our shared goal, year after year, we notice that a
            substantial number of children struggle with their learning
            journeys. The roots of low learning scores can many a times be
            traced back to weak foundations language learning. Many teachers and
            parents struggle while navigating the complexities of language
            learning, grappling with methods and resources that may not be the
            best fit for the needs of the children they seek to support.
          </p>
          <img src="img2.png" alt="Image 2" />
        </div>
        <div className="section">
          <img src="img3.png" alt="Image 3" />
          <p>
            And yet, there are pockets of innovation where certain schools and
            teachers are pioneering innovative solutions aligned with best
            practices in learning. These approaches need to be understood and
            researched to share learnings for all. Without it, public and
            private organisations spend valuable time and resources in
            reinventing the wheel for problems that have been solved.
          </p>
        </div>
      </div>
      

      <div className="about-us">
        <h1>What We Do</h1>
        <div className="hrline">
          <img
            src="https://pehlayakshar.org/wp-content/uploads/2016/02/home_charity2_sep1.png"
            alt="Separator"
            title=""
          />
        </div>
      </div>

      <div >
        <h2 className="other-section">
          "We promote the sharing and exploration of pedagogical innovations that
          seamlessly <br/> integrate the best principles of learning with the
          realities of our students' lives."
        </h2>
      </div>

      <div>
        <h1> .</h1>
        <h1>footer footer</h1>
      </div>
    </>
  );
}

export default Poster;
