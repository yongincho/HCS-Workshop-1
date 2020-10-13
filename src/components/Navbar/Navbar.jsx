import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Jason (Yong In) Cho</h1>
        <div className="info-bar">
          <p className="info-item">jcho@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link 
            className="info-link"
            to={{pathname: "https://instagram.com"}}
            target="_blank"
          >
            Instagram
          </Link>
          <Link 
            className="info-link"
            to={{pathname: "https://facebook.com"}}
            target="_blank"
          >
            Facebook
          </Link>
          <Link 
            className="info-link"
            to={{pathname: "https://linkedin.com"}}
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <Link className="nav-link" to={{pathname: "/about"}}>About</Link>
        <Link className="nav-link" to={{pathname: "/education"}}>Education</Link>
        <Link className="nav-link" to={{pathname: "/experience"}}>Experiences</Link>
        <Link className="nav-link" to={{pathname: "/organization"}}>Organization</Link>
        <Link className="nav-link" to={{pathname: "/projects"}}>Projects</Link>
      </div>
    </>
  );
}
