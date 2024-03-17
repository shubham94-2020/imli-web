const Users = require("./../models/userSchema");
const Jwt = require("jsonwebtoken");

const jwtKey = "e-comm";
exports.SignUp = async (req, res) => {
  let user = new Users(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      res.send("try after sometime");
    }
    res.send({ result, auth: token });
  });
};

exports.Login = async (req, resp) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await Users.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          resp.send("try after sometime");
        }
        resp.send({ user, auth: token });
      });
    } else {
      resp.send({ result: "No User Found" });
    }
  } else {
    resp.send({ result: "No User Found" });
  }
};

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
};

