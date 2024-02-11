import React from "react";
import img1 from "./images/research.png";
import img2 from "./images/create.png";
import img3 from "./images/connect.png";
import img4 from "./images/support.png";

import "./we.css";
function We() {
  return (
    <>
      <div className="how_we">
        <h1>How will we do it?</h1>
        <div className="outer_container">
          <div className="outer_box">
            <div className="svg_boy">
              <img src={img1} alt="shubham's image"></img>
            </div>
            <div className="content_area">
              <h2>Research</h2>
              Undertake and support research that enables us to create better
              language learning programs and formulate better strategies for
              language learning for everyone.
            </div>
          </div>
          <div className="outer_box">
            <div className="svg_boy">
              <img src={img2} alt="shubham's image"></img>
            </div>
            <div className="content_area">
              <h2>Create</h2>
              Develop low-cost, effective and interesting media aimed at
              enhancing teacher performance and student learning.
            </div>
          </div>
          <div className="outer_box">
            <div className="svg_boy">
              <img src={img4} alt="shubham's image"></img>
            </div>
            <div className="content_area">
              <h2>support</h2>{" "}
                Undertake and support research that enables us to create better
                language learning programs and formulate better strategies for
                language learning for everyone.
            </div>
          </div>
          <div className="outer_box">
            <div className="svg_boy">
              <img src={img3} alt="shubham's image"></img>
            </div>
            <div className="content_area">
              <h2>Connect</h2>
              Provide a platform for exchange of dialogue among educationists,
              the media and policy makers and augments educational growth and
              research
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default We;
