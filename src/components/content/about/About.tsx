import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './About.css';

export function About() {
  return (
    <div className="about">
      <h2 className="about-title">About</h2>
      <p className="about-description">
        Hi, I'm Luca! I'm a full-stack developer and aspirant
        data scientist, almost graduated at University of Turin
        in Computer Science degree. Also thanks to my thesis, I
        expand my topic of interest to social computing and HCI, in
        particular about the gamification of platforms.
      </p>
      
      <h2 className="about-title">Interests</h2>
      <p className="about-description">
        Addicted by code, amazed by AI and affascinated by data science.
        Food&beer lover, owner of a doggo and average book
        enjoyer.
      </p>
    </div>
  );
}