import React from "react";
import "./PdfComp.css";

const PdfComp = ({ src }) => {
 return (
 <div className="pdf-container">
 <iframe src={src} className="pdf-iframe" width="100%" height="500px" />
 </div>
 );
};
export default PdfComp;
