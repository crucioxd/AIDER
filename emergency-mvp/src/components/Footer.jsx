import React from "react";

const Footer = () => {
  const footerStyle = {
    width: '98vw', // Full width of the viewport
    backgroundColor: '#EAEAEA',
    textAlign: 'center',
    padding: '10px 0',
    color: 'black',
    position: 'relative', // Change to relative to avoid overlap issues
    bottom: 0, // Position at the bottom of the parent element
    left: 0, // Align to the left edge of the viewport
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    margin: '0 10px',
  };

  return (
    <div style={footerStyle}>
      <p>
        <a href="/privacy" style={linkStyle}>Privacy Policy</a> | 
        <a href="/terms" style={linkStyle}>Terms of Use</a>
      </p>
    </div>
  );
};

export default Footer;
