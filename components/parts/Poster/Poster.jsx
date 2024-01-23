import React, { useState } from 'react'
import './poster.css'
import imageSlide from '../export_image_object/Image_object';
function Poster() {
  const [index,setindex]=useState(0);
  const obj={
    backgroundImage: `url(${imageSlide[index].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'auto',
    height:'500px',
    width:"100%",
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 0.4s ease',
  }
  function gotonextindex(index)
  {
    setindex(index);
  }
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
              {imageSlide.map((imageSlide, index) => (
                <span
                  key={index}
                  onClick={() => {
                    gotonextindex(index);
                  }}
                ></span>
              ))}
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
                Pehlay Akshar Foundation was started in 2008 with the core
                belief that every student has the right to an excellent
                education and gain the skills needed to be future-ready.Pehlay
                Akshar Foundation was started in 2008 with the core belief that
                every student has the right to an excellent education and gain
                the skills needed to be future-ready.Pehlay Akshar Foundation
                was started in 2008 with the core belief that every student has
                the right to an excellent education and gain the skills needed
                to be future-ready.
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
                Pehlay Akshar Foundation was started in 2008 with the core
                belief that every student has the right to an excellent
                education and gain the skills needed to be future-ready.Pehlay
                Akshar Foundation was started in 2008 with the core belief that
                every student has the right to an excellent education and gain
                the skills needed to be future-ready.Pehlay Akshar Foundation
                was started in 2008 with the core belief that every student has
                the right to an excellent education and gain the skills needed
                to be future-ready.
              </label>
              
            
          </div>
        
      </div>
    </>
  );
}

export default Poster
