import React from "react";
import "./Aboutus.css";

function Aboutus() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="hrline">
        <img
          src="https://pehlayakshar.org/wp-content/uploads/2016/02/home_charity2_sep1.png"
          alt="Separator"
          title=""
        />
      </div>
      <div className="cont">
        <div className="video-content">
          <iframe
            width="450"
            height="300"
            src="https://www.youtube.com/embed/x1T0fAV1_-4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-content">
          <div>
            <label>
              A organization committed to advancing language
              education in India. Through research, support, and creation of
              innovative resources, we promote inclusive learning environments
              that celebrate linguistic diversity. Our mission is to bridge
              inequities in language education, nurturing critically conscious
              individuals and fostering pluralistic communities. We facilitate
              dialogue among educators, policymakers, and stakeholders to drive
              educational growth and exchange best practices. Join us in
              empowering educators and learners alike to thrive academically and
              socially in a multilingual world.
            </label>
            <br />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
