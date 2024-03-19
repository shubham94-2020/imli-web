const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app= require('./app');   
app.use(cors({ origin: "http://localhost:5173" }));
dotenv.config({ path: "./.env" });
//code for connecting to mongoose database

const mongoose = require("mongoose");


mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection established"));
const db = mongoose.connection;

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
