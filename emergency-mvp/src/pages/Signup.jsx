import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import loginImage from "../assets/loginimggg.png";
import googleIcon from "../assets/google-icon.png"; // Replace with your Google icon path
import facebookIcon from "../assets/facebook-icon.png"; // Replace with your Facebook icon path

const LoginPage = () => {
  return (
    <div className="login-container">
      <img src={loginImage} alt="Login Illustration" className="login-image" />
      <div className="login-wrapper">
        <div className="login-card">
          <h2>Create an account</h2>
          <form>
            <div className="input-fields">
            <input type="name" className="half-width" placeholder="Name" required />
              <input type="email" className="half-width" placeholder="Email" required />
              <input type="password" className="half-width" placeholder="Password" required />
            </div>
            <button className="login-btn" type="submit">
        Sign Up
            </button>
          </form>
          <div className="or-separator">
            <hr className="line" />
            <span>OR</span>
            <hr className="line" />
          </div>
          <div className="social-login">
            <button className="social-btn google-btn">
              <img src={googleIcon} alt="Google Icon" className="social-icon" />
      
            </button>
            <button className="social-btn facebook-btn">
              <img src={facebookIcon} alt="Facebook Icon" className="social-icon" />
            
            </button>
          </div>
          <p className="signup-message">
            have an account already? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
