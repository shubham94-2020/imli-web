const express = require("express");
// const blogRoutes=require('./routes/blogRoutes');
// const userRoutes = require("./routes/userRoutes");
const programRoute=require('./routes/programRoute');

const app = express();
app.use(express.json());

// function verifyToken(req, resp, next) {
//   let token = req.headers["authorization"];
//   if (token) {
//     token = token.split(" ")[1];

//     Jwt.verify(token, jwtKey, (err, valid) => {
//       if (err) {
//         resp.status(401).send({ result: "Please prvide valid token " });
//         www;
//       } else {
//         next();
//       }
//     });
//   } else {
//     resp.status(401).send({ result: "Please add token with header" });
//   }
// }

// app.use('/blogs',blogRoutes);
// app.use('/user',userRoutes);
app.use('/programs',programRoute);
// app.get("/",(req,resp)=>{
//     resp.send("<h1> hello </h1>");
// })
// app.use("/user", userRoutes);
// app.use('/resources',resourceRoutes);
module.exports = app;
