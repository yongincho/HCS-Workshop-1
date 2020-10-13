import React from "react";
import "./About.css";
import ProfilePic from "../../assets/profilepic.png";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={ProfilePic} className="intro-picture" />
        </div>
        <div className="intro-item">
          Hello! I'm Jason (Korean name: Yong In) from South Korea. 
          I'm currently a freshman at Harvard University and is intending to concentrate in Computer Science and Biomedical Engineering.
          I am a programmer, engineer, researcher, author, tennis player, cellist, and avid reader!
          Welcome to my page!
        </div>
      </div>
    </div>
  );
}
