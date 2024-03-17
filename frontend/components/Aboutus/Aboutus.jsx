import React from "react";
import "./Aboutus.css";
function Aboutus() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="hrline"><img src="https://pehlayakshar.org/wp-content/uploads/2016/02/home_charity2_sep1.png" alt="Separator" title=""/></div>
      <div className="content">
        <div className="video-content">
          <iframe
            width="450"
            height="300"
            src="https://www.youtube.com/embed/FkOkFbdJ-lE?si=7Uz4RvLp1g3RVBqK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen="allowfullscreen"
          ></iframe>
        </div>
        <div className="text-content">
          <div>
            <label>
              Pehlay Akshar Foundation was started in 2008 with the core belief
              that every student has the right to an excellent education and
              gain the skills needed to be future-ready.
            </label>
            <br />
          </div>
          <div>
            <label>
              Pehlay Akshar Foundation was started in 2008 with the core belief
              that every student has the right to an excellent education and
              gain the skills needed to be future-ready.
            </label>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
