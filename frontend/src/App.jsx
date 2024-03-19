import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Poster from "../components/parts/Poster/Poster";
import Aboutus from "../components/Aboutus/Aboutus";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";
import Footer from "../components/footer/footer";
import Program1 from "../components/Program/Program1";
import Program2 from "../components/Program/Program2";
import Program4 from "../components/Program/Program4";
import Blog from "../components/Blogs/Blog";
import Signup from "../components/loginsignup/Signup";
import BlogForm from "../components/Blogs/BLOG_input/Blog_input";

function App() {
  return (
    <>
      <Navbar></Navbar>

      {/* <hr></hr> */}

      <Routes>
        <Route path="/" element={<Poster></Poster>}></Route>
        <Route path="/Program1" element={<Program1></Program1>}></Route>
        <Route path="/Program2" element={<Program2></Program2>}></Route>
        <Route path="/Program2" element={<Program2></Program2>}></Route>
        <Route path="/Program4" element={<Program4></Program4>}></Route>
        <Route path="/Program2" element={<Program2></Program2>}></Route>
        <Route path="/about" element={<Aboutus></Aboutus>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog_input" element={<BlogForm/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
