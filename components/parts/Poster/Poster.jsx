
import React, { useState } from 'react';
import './poster.css';
import imageSlide from '../export_image_object/Image_object';

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
    backgroundPosition: 'center',
    backgroundSize: 'auto',
    height: '500px',
    width: "100%",
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 0.4s ease',
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
            <div className="carousal-boullt">
              {
                imageSlide.map((imageSlide,index)=>(
                    <span 
                    key={index} 
                    onClick={()=>{
                    gotonextindex(index)
                    }}></span>
                ))
              }
        </div>
           </div>
        </div>
    </div>
    </>

  )
}

export default Poster;
