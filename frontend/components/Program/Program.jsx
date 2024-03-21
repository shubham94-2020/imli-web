import React from "react";
import { Link } from "react-router-dom"; 
// import img1 from "./images/im1.jpg";
// import img2 from "./images/im2.jpg";
// import img3 from "./images/im3.jpg";
import "./Program.css";
function Blog() {
  return (
    <>
      <div className="blogss">
        <div className="containers">
          <div className="img_boyaas">
            <Link to="/program1">
              <img src="/i1.jpg" alt="program1" className="images" />
            </Link>
          </div>

          <div className="text_areaas">
            <h2>
              Early Childhood Education<br></br>{" "}
            </h2>
            <br></br>
            <p>
              Parents and policy makers all agree - early childhood is a pivotal
              phase in human development as the child learns and develops the
              most in this period. In India, this is seen through the widespread
              presence of government anganwadis and balwadis, and the large
              number of private preschools that are opening to cater to parental
              demand.And yet, many children face a severe lack of quality
              education in government centers, and low fee pre-primary schools.
              The India Early Childhood Education Impact (IECEI) longitudinal
              study showed that participation in good quality preschools leads
              to higher school readiness levels, which in turn lead to better
              early grade outcomes.
            </p>
          </div>
        </div>
      </div>
      <div className="blogss">
        <div className="containers">
          <div className="img_boyaas">
            <Link to={"/Program2"}>
              <img src="/i2.jpg" alt="program2" className="images" />
            </Link>
          </div>
          <div className="text_areaas">
            <h2>
              English Language Reading and Writing<br></br>{" "}
            </h2>
            <br></br>
            <p>
              English literacy presents a significant challenge in Indian
              classrooms, where students consistently struggle in reading and
              writing assessments. Existing FLN programs fall short of what
              current research and evidence have shown to work in early
              literacy, which is systematic and explicit phonics instruction,
              accompanied by authentic reading and writing tasks.English
              language teaching in schools often focuses on one strand, with
              mainstream schools using NCERT textbooks without teaching
              systematic decoding. This leads to a disconnect between textbook
              expectations and early readers' capabilities. Pre-primary schools
              often emphasize rote learning of alphabet names and writing,
              sprinkled with some phonics activities and decodables. 
            </p>
          </div>
        </div>
      </div>
      <div className="blogss">
        <div className="containers">
          <div className="img_boyaas">
            <Link to={"/Program3"}>
              <img src="/i6.jpg" alt="program4" className="images" />
            </Link>
          </div>
          <div className="text_areaas">
            <h2>
              Multilingual Education<br></br>{" "}
            </h2>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              adipisci fugit sed voluptatem repudiandae nostrum quibusdam
              dolorem fuga vel officia vero quas odit animi qui doloremque
              assumenda, modi quia aspernatur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. git sed voluptatem repudiandae
              nostrum quibusdam dolorem fuga vel officia vero quas odit animi
              qui doloremque assumenda, modi quia aspernatur.
            </p>
          </div>
        </div>
      </div>
      <div className="blogss">
        <div className="containers">
          <div className="img_boyaas">
            <Link to={"/Program4"}>
              <img src="/i8.jpg" alt="program4" className="images" />
            </Link>
          </div>
          <div className="text_areaas">
            <h2>
              Teacher Training Program<br></br>{" "}
            </h2>
            <br></br>
            <p>
              English literacy presents a significant challenge in Indian
              classrooms, where students consistently struggle in reading and
              writing assessments. Existing FLN programs fall short of what
              current research and evidence have shown to work in early
              literacy, which is systematic and explicit phonics instruction,
              accompanied by authentic reading and writing tasks.English
              language teaching in schools often focuses on one strand, with
              mainstream schools using NCERT textbooks without teaching
              systematic decoding. This leads to a disconnect between textbook
              expectations and early readers' capabilities. Pre-primary schools
              often emphasize rote learning of alphabet names and writing,
              sprinkled with some phonics activities and decodables.
            </p>
          </div>
        </div>
      </div>
      <div className="blogss">
        <div className="containers">
          <div className="img_boyaas">
            <Link to={"/Program5"}>
              <img src="/i5.jpg" alt="program4" className="images" />
            </Link>
          </div>
          <div className="text_areaas">
            <h2>
              3D Learning Program <br></br>{" "}
            </h2>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              adipisci fugit sed voluptatem repudiandae nostrum quibusdam
              dolorem fuga vel officia vero quas odit animi qui doloremque
              assumenda, modi quia aspernatur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. git sed voluptatem repudiandae
              nostrum quibusdam dolorem fuga vel officia vero quas odit animi
              qui doloremque assumenda, modi quia aspernatur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
