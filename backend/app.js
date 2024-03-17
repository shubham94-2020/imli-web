const express = require('express');
const Jwt = require("jsonwebtoken");
const jwtKey = "e-comm";
// const blogRoutes=require('./routes/blogRoutes');

// const userRoutes=require('./routes/userRoutes');
const programRoute=require('./routes/programRoute');
const Users=require('./models/userSchema')

const app = express();

app.post("/user/signup", async (req, resp) => {
  let user = new Users(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      resp.send("try after sometime");
    }
    resp.send({ result, auth: token });
  });
});

function verifyToken(req, resp, next) {
  let token = req.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];

    Jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        resp.status(401).send({ result: "Please prvide valid token " });
        www;
      } else {
        next();
      }
    });
  } else {
    resp.status(401).send({ result: "Please add token with header" });
  }
}
// app.use('/blogs',blogRoutes);
// app.use('/user',userRoutes);
app.use('/programs',programRoute);
module.exports = app;