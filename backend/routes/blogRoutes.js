const express = require("express");
const router = express.Router();
const Blog = require("../models/Blogschema.js");

////create
router.post("/createblog", async (req, res) => {
  try {
    const { title, body } = req.body;
    const newblog = new Blog({ title, body });
    await newblog.save();
    res.status(200).json({ messgae: "blog created!" });
  } catch (error) {
    res.status(200).json({ messgae: " error in blog creation!" });
  }
});
///read
router.get("/readblog/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const readblog = await Blog.findById(id);
    res.status(200).json({ readblog, message: "succesfully read!" });
  } catch (error) {
    res.status(200).json({ message: "error in read!" });
  }
});

////read alll shubham
router.get("/readblogs", async (req, res) => {
  try {
    const allBlogs = await Blog.find().sort({ createdAt: 'desc' }); // Fetch all blogs from the database
    res.status(200).json({ blogs: allBlogs, message: "Successfully fetched all blogs!" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs!", error: error.message });
  }
});

///update
router.put("/updateblog/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { title, body } = req.body;
    const readblog = await Blog.findByIdAndUpdate(id, { title, body });
    readblog.save();
    res.status(200).json({ message: "blog updated" });
  } catch (error) {
    res.status(200).json({ message: "error in update blog" });
  }
});
module.exports = router;

///delete
router.delete("/deleteblog/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Blog.findByIdAndDelete(id).then(() => {
      res.status(200).json({messgae:"blog deleted!"});
    });
  } catch (error) {
    res.status(200).json({message:"error in delete blog"});
  }
});
