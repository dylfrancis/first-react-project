import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          className="logo-image"
          src="../images/react-icon-small.png"
          alt="logo"
        />
        <h1 className="logo-text">ReactFacts</h1>
      </div>
      <h3 className="navbar-title">React Course - Project 1</h3>
    </div>
  );
};
