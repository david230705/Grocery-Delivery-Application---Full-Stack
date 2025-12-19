import { useState, useContext } from "react";
import axios from "axios";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import "./login.css"; // ✅ lowercase file name

const Login = () => {
  const { setToken, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/user/login`, {
        email,
        password
      });

      if (res.data.success) {
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p className="login-sub">Login to continue shopping</p>

        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
