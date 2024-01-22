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

export default Poster
