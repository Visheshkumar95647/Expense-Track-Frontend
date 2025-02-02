import React, { useState } from 'react';
import '../style/login.css';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { baseURL } from '../URL';
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !pass) {
      toast.error("Please fill in both email and password.");
      return;
    }
    console.log("hlo-0")
    try {
      console.log("hlo-1")
      const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: pass,
        }),
      });

      const data = await response.json(); 
      console.log("hlo-2")
      if (response.ok) {
        localStorage.setItem("token", data.token); 
        toast.success("Login Successfully");
        setTimeout(() => {
          navigate("/"); 
        }, 1000);
      } else {
        toast.error(data.error || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      toast.error("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="form">
    <ToastContainer/>
      <div className="details">
        <div className="img"><img src={logo} alt="Logo" /></div>
        <div className="email">
          <input
            type="text"
            id="email"
            placeholder="Enter Your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="btns">
          <button type="button" className="btn" id='btn-1' onClick={handleLogin}>Login</button>
          <button type="button" className="btn" id='btn-2'>
            <Link to="/sign">Signup</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
