import React, { useState, useEffect } from "react";
import "./poster.css";
import imageSlide from "../export_image_object/Image_object";
import ImageSlider from "./img";

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

  // State to track whether the "Why we are here" section is in view
  const [isWhyInView, setIsWhyInView] = useState(false);

  useEffect(() => {
    // Function to handle intersection of the "Why we are here" section
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsWhyInView(true);
        }
      });
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    // Observe the "Why we are here" section
    observer.observe(document.querySelector(".why-we-are-here"));

    // Cleanup: Disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  const slides = [
    { url: "i2.jpg", programName: "IMLi Preschool Initiative" },
    { url: "i1.jpg", programName: "IMLi Reading Programs" },
    { url: "i3.jpg", programName: "IMLi Multi-Lingual Hub" },
    { url: "i4.jpg", programName: "IMLi Teacher Training Programs" },
    { url: "i5.jpg", programName: "IMLi 3D Learning Program" },
  ];
  const containerStyles = {
    width: "100%",
    height: "80vh",
    

  };

  return (
    <>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      
      {/* why we are here section */}
      <div className={`about-us ${isWhyInView ? "fade-in-up" : ""}`}>
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
        <div
          className={`section fade-in-up ${isWhyInView ? "fade-in-up" : ""}`}
        >
          
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
        <div
          className={`section fade-in-up ${isWhyInView ? "fade-in-up" : ""}`}
        >
          <p>
            Despite our shared goal, year after year, we notice that a
            substantial number of children struggle with their learning
            journeys. The roots of low learning scores can many a times be
            traced back to weak foundations language learning. Many teachers and
            parents struggle while navigating the complexities of language
            learning, grappling with methods and resources that may not be the
            best fit for the needs of the children they seek to support.
          </p>
          
        </div>
        <div
          className={`section fade-in-up ${isWhyInView ? "fade-in-up" : ""}`}
        >
         
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

      <div>
        <h2 className="other-section ">
          "We promote the sharing and exploration of pedagogical innovations
          that seamlessly <br /> integrate the best principles of learning with
          the realities of our students' lives."
        </h2>
      </div>

      <div className="JoinUs">
        <h1>Join Our Community</h1>
        <p>Enter your email address to register to our newsletter subscription delivered on regular basis!</p>
        <input type="email" placeholder="Enter Your Email" size={38}/>
        <button onClick={<a href="#"></a>}>Subscribe</button>
      </div>

      <div>
        <h1>footer footer</h1>
      </div>
    </>
  );
}

export default Poster;
