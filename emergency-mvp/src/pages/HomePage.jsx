import React from "react";
import TypingEffect from "react-typing-effect";
import ambImg from "../assets/ambimgg.png"
import backimage from "../assets/backkfinal.png";
// Adjust this import based on your global styles or create a specific CSS file for the homepage
import Footer from "../components/Footer";
import Header from "../components/Header";
import Reviews from "../components/Reviews"; 
import "./home.css";
const HomePage = () => {
  return (
    <div className="home-container">

      <div className="home-content">
        <div className="left">
        <h1 className="heading-animation">Welcome to Aider</h1>
        <TypingEffect className="typed"
          text={[
            "Your go-to platform for efficient emergency patient registration and management.",
            
          ]}
          speed={30}
          eraseDelay={1000000}
          typingDelay={500}
          
        />
        <br />
        <br />
        <button className="cta-button">Get Started</button>
        </div>
        
      </div>
      {/* <div className="right">
        <img className="ambImg" src={ambImg} alt="Aider Illustration" />
        </div> */}
      <div className="features-section">
        <h1 className="headfeat heading-animation">Why Choose Aider?</h1>
        <div className="features-cards">
          <div className="feature-card">
            <h3>Quick Registration</h3>
            <p>Register emergency cases quickly with our streamlined form.</p>
          </div>
          <div className="feature-card">
            <h3>Admin Dashboard</h3>
            <p>Manage and track patient information with ease through the admin dashboard.</p>
          </div>
          <div className="feature-card">
            <h3>Respondent Alerts</h3>
            <p>Ensure timely responses with alerts for respondents on new emergency cases.</p>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default HomePage;
