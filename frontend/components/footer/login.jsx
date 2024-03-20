import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    // if (auth) {
    //   navigate("/");
    // }
  });

  const handleLogin = () => {
    // Store user credentials in local storage
    localStorage.setItem("user", JSON.stringify({ email, password }));
    navigate("/");
  }
  return (
    <div className="login">
      <h1> Login</h1>
      <input
        type="text"
        className="inputBox"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        className="inputBox"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin} className="button" type="button">
        Login
      </button>
    </div>
  );
}


export default Login;