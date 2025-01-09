import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { AuthContext } from "../context/authcontext"; // Import the AuthContext

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext); // Get auth state and setter

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    setIsLoggedIn(false); // Update authentication state
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Aider <h3>+</h3>
      </div>
      <ul className="navbar-links">
        {[
          { path: "/", label: "Home" },
          { path: "/emergency", label: "Emergency Registration" },
          { path: "/respondent", label: "Respondent" },
          { path: "/about-us", label: "About Us" },
          { path: "/contact-us", label: "Contact Us" },
          { path: "/faqs", label: "FAQs" },
        ].map((link) => (
          <li
            key={link.path}
            className={`${
              location.pathname === link.path ? "active" : ""
            } ${link.className || ""}`}
          >
            <a href={link.path}>{link.label}</a>
          </li>
        ))}

        {/* Conditionally render Login or Logout */}
        {isLoggedIn ? (
          <li>
<button onClick={handleLogout} className="logout-btn">
  Logout
</button>

          </li>
        ) : (
          <li
            className={`${
              location.pathname === "/login" ? "active" : ""
            }`}
          >
            <a href="/login">Login</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;