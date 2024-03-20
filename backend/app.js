const express = require("express");
const cors = require("cors");
// const blogRoutes=require('./routes/blogRoutes');
const emailRoutes = require("./routes/emailRoutes");
const userRoutes = require("./routes/userRoutes");
// const resourceRoutes=require('./routes/resourceRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// app.use('/blogs',blogRoutes);
app.use("/user", userRoutes);
app.use("/email", emailRoutes);
// app.use('/resources',resourceRoutes);
module.exports = app;
