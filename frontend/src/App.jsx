

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Poster from "../components/parts/Poster/Poster";
import Aboutus from "../components/Aboutus/Aboutus";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";
import Resources from "../components/Resources/resources";
import Footer from "../components/footer/Footer";
import Program1 from "../components/Program/Program1";
import Program2 from "../components/Program/Program2";
import Program4 from "../components/Program/Program4";
import Program3 from "../components/Program/Program3";
import Program5 from "../components/Program/Program5";
import Program from "../components/Program/Program"
import Blog from "../components/Blogs/Blog";
import BlogForm from "../components/Blogs/BLOG_input/Blog_input";
import Login from "../components/footer/login";

function App() {
  return (
    <>
      <Navbar></Navbar>

      {/* <hr></hr> */}

      <Routes>
        <Route path="/" element={<Poster></Poster>}></Route>
        <Route path="/Program1" element={<Program1></Program1>}></Route>
        <Route path="/Program2" element={<Program2></Program2>}></Route>
        <Route path="/Program3" element={<Program3></Program3>}></Route>
        <Route path="/Program4" element={<Program4></Program4>}></Route>
        <Route path="/Program5" element={<Program5></Program5>}></Route>
        <Route path="/about" element={<Aboutus></Aboutus>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="/program" element={<Program></Program>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/resources" element={<Resources></Resources>}></Route>
        <Route path="/blog_input" element={<BlogForm/>} />
        <Route path="/resources" element={<Resources/>} />

        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
