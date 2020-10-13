import React from "react";
import Project from "../../components/Project/Project";
import Reactimage from "../../assets/react.png";
import Janestreetimage from "../../assets/janestreet.png";


export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project 
        title="HCS-Workshop-1 (React)" 
        link="https://github.com/"
        source={Reactimage}
      ></Project>
      <Project 
        title="HCS-Workshop-2 (WebScraping) - Coming Soon" 
        link="https://github.com/"
        source={Janestreetimage}
      ></Project>
      <Project 
        title="CS50 Final Project - Coming Soon" 
        link="https://github.com/"
        source={Janestreetimage}
      ></Project>
    </div>
  );
}
