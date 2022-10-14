import { faSquareGithub, faSquareInstagram, faSquareSteam, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <a href="https://twitter.com/ThinkerBigger">
        <FontAwesomeIcon
          icon={faSquareTwitter}
          className="footer-icon" />
      </a>
      
      <a href="https://steamcommunity.com/id/TheThinkerBigger/">
        <FontAwesomeIcon
          icon={faSquareSteam}
          className="footer-icon" />
      </a>
      
      <a href="https://www.instagram.com/_lucamodica_/">
        <FontAwesomeIcon
          icon={faSquareInstagram}
          className="footer-icon" />
      </a>
      
      <a href="https://github.com/lucamodica">
        <FontAwesomeIcon
          icon={faSquareGithub}
          className="footer-icon" />
      </a>
    </footer>
  );
}