import React from "react";
import img1 from "./images/im1.jpg";
import img2 from "./images/im2.jpg";
import img3 from "./images/im3.jpg";
import "./blog.css";
function Blog() {
  return (
    <>
      <div className="blogs">
        <div className="container">
          <div className="img_boyaa">
            <img src={img1} alt="shubham's image"></img>
          </div>
          <div className="text_areaa">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
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
      <div className="blogs">
        <div className="container">
          <div className="img_boyaa">
            <img src={img2} alt="shubham's image"></img>
          </div>
          <div className="text_areaa">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
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
      <div className="blogs">
        <div className="container">
          <div className="img_boyaa">
            <img src={img3} alt="shubham's image"></img>
          </div>
          <div className="text_areaa">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
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
