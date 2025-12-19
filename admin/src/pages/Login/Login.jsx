import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "12345") {
      localStorage.setItem("adminLoggedIn", true);
      navigate("/add"); // go to admin panel after login
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
