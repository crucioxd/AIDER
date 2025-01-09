import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Login.css";
import loginImage from "../assets/loginimggg.png";
import googleIcon from "../assets/google-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import { AuthContext } from "../context/authcontext";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoggedIn } = useContext(AuthContext);
  const [showPopup, setShowPopup] = useState(false); // State for pop-up visibility

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token); // Save the token
        setIsLoggedIn(true); // Update authentication state
        setShowPopup(true); // Show the pop-up
      
        setTimeout(() => {
          setShowPopup(false);
          navigate(location.state?.from?.pathname || "/"); // Redirect to the previous location or home page
        }, 3000);
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="login-container">
      {/* Pop-up Message */}
      {showPopup && (
        <div className="popup-card">
          <p>🎉 You've been logged in successfully!</p>
        </div>
      )}

      <img src={loginImage} alt="Login Illustration" className="login-image" />
      <div className="login-wrapper">
        <div className="login-card">
          <h2>Welcome Back!</h2>
          <form onSubmit={handleLogin}>
            <div className="input-fields">
              <input type="email" name="email" className="half-width" placeholder="Email" required />
              <input type="password" name="password" className="half-width" placeholder="Password" required />
            </div>
            <button className="login-btn" type="submit">
              Login
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
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;