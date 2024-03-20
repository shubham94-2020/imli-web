import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const Collectdata = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:3000/user/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    if (result) {
      navigate("/");
    }
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="enter name"
      />
      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder="enter Email"
      />
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="enter password"
      />
      <button onClick={Collectdata} className="button">
        Signup
      </button>
    </div>
  );
};

export default Signup;
