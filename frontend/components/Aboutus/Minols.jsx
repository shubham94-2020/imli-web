import React from "react";
import img1 from "./img/image.png";
import "./minols.css";
function Minols() {
  return (
    <div className="parent_cont">
      <div className="box_con">
        <div className="title_boy">
             <img src={img1} alt="" />
             <div className="h">
             <h3>Mrs. Shalini Khade</h3>
             <p>Principal, Shishu Mandir School, Khopoli</p>
             </div>
        </div>
        <div className="text_boy">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            beatae autem nemo necessitatibus perferendis odit aliquid sed error

          </p>
        </div>
      </div>
      <div className="box_con">
        <div className="title_boy">
             <img src={img1} alt="" />
             <div className="h">
             <h3>Suvarna Kharat</h3>
             <p>Teacher, Urja Private School, Ahmednagar</p>
             </div>
        </div>
        <div className="text_boy">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            beatae autem nemo necessitatibus perferendis odit aliquid sed error

          </p>
        </div>
      </div>
      <div className="box_con">
        <div className="title_boy">
             <img src={img1} alt="" />
             <div className="h">
             <h3>Ashwini Ponkshe</h3>
             <p>Principal, Sangli</p>
             </div>
        </div>
        <div className="text_boy">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            beatae autem nemo necessitatibus perferendis odit aliquid sed error

          </p>
        </div>
      </div>
      <div className="box_con">
        <div className="title_boy">
             <img src={img1} alt="" />
             <div className="h">
             <h3>Rajshri Kare</h3>
             <p>Parent, Pune</p>
             </div>
        </div>
        <div className="text_boy">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            beatae autem nemo necessitatibus perferendis odit aliquid sed error

          </p>
        </div>
      </div>
    </div>
  );
}

export default Minols;
