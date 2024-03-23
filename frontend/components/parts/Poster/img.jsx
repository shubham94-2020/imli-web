import { useState } from "react";
import { Link } from "react-router-dom";
import "./img.css"; // Import the CSS file

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="slider">
      {" "}
      {/* Use the className instead of inline styles */}
      <div>
        <div onClick={goToPrevious} className="left-arrow">
          {" "}
          {/* Use the className instead of inline styles */}❰
        </div>
        <div onClick={goToNext} className="right-arrow">
          {" "}
          {/* Use the className instead of inline styles */}❱
        </div>
      </div>
      <Link to={`/${slides[currentIndex].a}`}>
        <div style={slideStylesWidthBackground} className="slide">
          {" "}
          {/* Use the className instead of inline styles */}
          <div className="posterContent">
            {slides[currentIndex].programName}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImageSlider;
