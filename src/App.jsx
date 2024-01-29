import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Poster from "../components/parts/Poster/Poster";
import Aboutus from "../components/Aboutus/Aboutus";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <hr></hr>
      
      <Routes>
        <Route path="/" element={<Poster></Poster>}></Route>
        
        <Route path="/about" element={<Aboutus></Aboutus>}></Route>
        
        
        <Route path="/blogs" element={<h1>blogs</h1>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>

    </>
  );
}

export default App;
