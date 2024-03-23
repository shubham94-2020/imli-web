import React from "react";
import img1 from "./images/research.png";
import img2 from "./images/create.png";
import img3 from "./images/connect.png";
import img4 from "./images/support.png";
import Card from '@mui/joy/Card';


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
              <h2>Support</h2>{" "}
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

      <div className="courses-sec">
      <h1>Our Courses</h1>
      <div className="courses">
      <div className="card">
      <img src="IMLi ELDP.png" alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">IMLi English Language Development Program for Teachers</h2>
        <p className="card-text">A comprehensive program designed to enhance teachers' proficiency in English, equipping them with effective language skills to enrich their teaching methodologies.</p>
        <br />
        <button className="chat-button">
  {/* <a href="https://wa.me/qr/X2NGUGDP3746P1" target="_blank" rel="noopener noreferrer">
    Chat with us 
    <img src="whatsapp.png" alt="WhatsApp logo" />
  </a> */}
  <a href="https://wa.me/qr/X2NGUGDP3746P1" target="_blank" rel="noopener noreferrer">Enquire Now</a>
</button>

      </div> 
    </div>
      <div className="card">
      <img src="IMLi StoryBox Marathi.png" alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">IMLi Marathi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Storybox</h2>
        <p className="card-text">Engaging storytelling sessions coupled with creative activities, aimed at fostering a love for reading and stimulating imagination in Marathi.
</p>
        <br /><button className="chat-button">
  {/* <a href="https://wa.me/qr/X2NGUGDP3746P1" target="_blank" rel="noopener noreferrer">
    Chat with us 
    <img src="whatsapp.png" alt="WhatsApp logo" />
  </a> */}
  <a href="https://wa.me/qr/X2NGUGDP3746P1" target="_blank" rel="noopener noreferrer">Enquire Now</a>
</button>
      </div>
    </div>
      <div className="card">
      <img src="IMLi English Storybox.png" alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">IMLi English &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Storybox</h2>
        <p className="card-text">A series of interactive storytelling and activity sessions, crafted to inspire a passion for reading and creativity in English among young learners.
</p>
        <br /><button className="chat-button">
  {/* <a href="https://wa.me/qr/X2NGUGDP3746P1" target="_blank" rel="noopener noreferrer">
    Chat with us 
    <img src="whatsapp.png" alt="WhatsApp logo" />
  </a> */}
  <a href="https://wa.me/qr/X2NGUGDP3746P1" target="_blank" rel="noopener noreferrer">Enquire Now</a>
</button>
      </div>
    </div>
      <div className="card">
      <img src="IMLI ThinkBox Registration Flyer.png" alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">IMLi Thinkbox</h2>
        <p className="card-text">Dynamic workshops focused on cultivating critical thinking skills and an enquiry-based approach, particularly in STEM subjects, encouraging analytical and innovative thinking.
</p>
        <br /><button className="chat-button">
  {/* <a href="https://wa.me/qr/X2NGUGDP3746P1" target="_blank" rel="noopener noreferrer">
    Chat with us 
    <img src="whatsapp.png" alt="WhatsApp logo" />
  </a> */}
  <a href="https://wa.me/qr/X2NGUGDP3746P1" target="_blank" rel="noopener noreferrer">Enquire Now</a>
</button>
      </div>
    </div>
      <div className="card">
      <img src="IMLi Blended Phonics Program.png" alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">IMLi Phonics Courses for Children</h2>
        <p className="card-text">Specially designed courses for children to master phonics, laying a strong foundation for reading and language skills through interactive and fun-filled activities.</p>
        <br />
        <button className="chat-button">
  {/* <a href="https://wa.me/qr/X2NGUGDP3746P1" target="_blank" rel="noopener noreferrer">
    Chat with us 
    <img src="whatsapp.png" alt="WhatsApp logo" />
  </a> */}
  <a href="https://wa.me/qr/X2NGUGDP3746P1" target="_blank" rel="noopener noreferrer">Enquire Now</a>
</button>
      </div>
    </div>
      {/* <div className="card">
      <img src="youtube.png" alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Learning Room</h2>
        <p className="card-text">A collaborative space that provides students & teachers with functional english curriculum, digital aids, books and skilled personnel for improving their english literacy & 21st century skills.</p>
        <br />
        <button className="chat-button">
  <a href="https://wa.me/qr/X2NGUGDP3746P1" target="_blank" rel="noopener noreferrer">
    Chat with us 
    <img src="whatsapp.png" alt="WhatsApp logo" />
  </a>
</button>
      </div>
    </div> */}
    </div></div>

      {/* <div className="how_we2">
        
        <h1>Our Courses</h1>
        <div className="outer_container2">
          <div className="outer_box2">
            <div className="svg_boy2">
              <img src={img1} alt="shubham's image"></img>
            </div>
            <div className="content_area2">
              <h2>In Class Teaching</h2>
              A 6-year teaching program in partnership with Government Schools to teach English and create safe learning spaces in classrooms across India.
            </div>
          </div>
          <div className="outer_box2">
            <div className="svg_boy2">
              <img src={img2} alt="shubham's image"></img>
            </div>
            <div className="content_area2">
              <h2>Create</h2>
              In partnership with SCERT Maharashtra, our ‘English’ classroom is televised across Maharashtra on DD Sahyadri. These video-based classrooms are based on our unique teaching approach and are aligned with the state’s Bal Bharti textbooks.
            </div>
          </div>
          <div className="outer_box2">
            <div className="svg_boy2">
              <img src={img4} alt="shubham's image"></img>
            </div>
            <div className="content_area2">
              <h2>Magic Classroom on Television</h2>{" "}
              A bank of simple, fun and engaging English stories in video format, for children between the ages of 5-13 years. These stories are recorded by volunteers and available on social media platforms.
            </div>
          </div>
          <div className="outer_box2">
            <div className="svg_boy2">
              <img src={img3} alt="shubham's image"></img>
            </div>
            <div className="content_area2">
              <h2>A Story A Day</h2>
              Working with teachers in Brihanmumbai Municipal Corporation (BMC) schools across all 24 wards of Mumbai, to help them build their confidence, and improve and strengthen their teaching practices and English language skills.
            </div>
          </div>
          <div className="outer_box2">
            <div className="svg_boy2">
              <img src={img3} alt="shubham's image"></img>
            </div>
            <div className="content_area2">
              <h2>Teacher Training</h2>
              A collaborative space that provides students & teachers with functional english curriculum, digital aids, books and skilled personnel for improving their english literacy & 21st century skills.
            </div>
          </div>
          <div className="outer_box2">
            <div className="svg_boy2">
              <img src={img3} alt="shubham's image"></img>
            </div>
            <div className="content_area2">
              <h2>Learning Room</h2>
              A collaborative space that provides students & teachers with functional english curriculum, digital aids, books and skilled personnel for improving their english literacy & 21st century skills.
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default We;
