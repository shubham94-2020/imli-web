import React, { useState } from "react";
import "./blog_input.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const BlogForm = () => {
  const [input, setinput] = useState({ title: "", body: "" });
  // const history=useHistory();
  const change = (event) => {
    const { name, value } = event.target;
    setinput({ ...input, [name]: value });
  };

  const createBlog = async () => {
    try {
      // Assuming input contains the title and body of the blog post
      if (input.title === "" || input.body === "") {
        toast.error("field cant be empty!");
      } else {
        await axios.post("http://localhost:3000/api/v1/createblog", input);
        console.log(input);
        setinput({ title: "", body: "" });
        toast.success("blog added");
        // history.push("/another-route");
      }
    } catch (error) {
      console.error("Error creating blog creating:", error);
    }
  };

  return (
    <>
      <div className="container main-blog ">
        <ToastContainer></ToastContainer>
        <div className="title-boy container ">
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={change}
            value={input.title}
          />
        </div>
        <div className="body-boy container">
          <textarea
            className=" bg-none"
            placeholder="Body"
            id="body-2012"
            name="body"
            value={input.body}
            rows={5}
            onChange={change}
          ></textarea>
        </div>
      </div>
      <div className="container createblog">
        <button className="custom-button" onClick={createBlog}>
          Add
        </button>
        <Link to="/blogs">
          <button className="custom-button">Cancel</button>
        </Link>
      </div>
      
    </>
  );
};

export default BlogForm;
