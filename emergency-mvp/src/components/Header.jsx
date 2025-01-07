import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

const Header = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">Aider <h3>+</h3></div>
      <ul className="navbar-links">
        {[
         
          { path: "/", label: "Home", },
          { path: "/emergency", label: "Emergency Registration" },
          { path: "/respondent", label: "Respondent", },
          { path: "/about-us", label: "About Us" },
          { path: "/contact-us", label: "Contact Us" },
          { path: "/faqs", label: "FAQs" },
          { path: "/login", label: "Login" },
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
      </ul>
    </nav>
  );
};

export default Header;
