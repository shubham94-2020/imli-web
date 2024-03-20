import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "./images/im1.jpg";
import axios from "axios";

import "./blog.css";
function Blog() {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    // Fetch all blogs when the component mounts
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/readblogs"
        );
        setblogs(response.data.blogs);
        console.log(blogs);
      } catch (error) {
        console.error("Error fetching blogs:");
      }
    };

    fetchBlogs(); // Call the fetchBlogs function
  }, []); // Empty dependency array to run only once on mount
  const deleteblog = async (id) => {
    try {
      console.log(id);
      await axios
        .delete(`http://localhost:3000/api/v1/deleteblog/${id}`)
        .then((res) => console.log(res.data.message))
        .then(setblogs(blogs.filter((blog) => blog._id !== id)));
    } catch (error) {
      console.log("error in delete blog" + error);
    }
  };
  return (
    <>
      {/* <Link to="/blog_input">
        <div className="container createblog">
          <button className="custom-button">Add blogs</button>
        </div>
      </Link> */}
      <div className="blogs">
        {blogs.map((blog, index) => (
          <div key={index}>
            <div className="single_blog">
              <div className="img_boyaa">
                <img src={img1} alt={`Blog ${index} image`} />
              </div>
              <div className="text_areaa ">
                <h2>{blog.title}</h2>
                <br />
                <p className="overflow_body">{blog.body}</p>
              </div>
            </div>
            <div className="delete_button">
              <button
                onClick={() => deleteblog(blog._id)}
                className="custom-button delete"
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/blog_input">
        <div className="delete_button add_button">
          <button className="custom-button">Add Blogs</button>
        </div>
      </Link>
    </>
  );
}

export default Blog;
