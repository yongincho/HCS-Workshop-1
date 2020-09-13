import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>your name</h1>
        <div className="info-bar">
          <p className="info-item">yourname@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          links to cool things you have online maybe?
        </div>
      </div>
      <div className="nav-background">we need functioning links here!</div>
    </>
  );
}
