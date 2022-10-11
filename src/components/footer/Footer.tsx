import { faSquareGithub, faSquareInstagram, faSquareSteam, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <FontAwesomeIcon
        icon={faSquareTwitter}
        className="footer-icon"
        onClick={
          () => window.location.href = 'https://twitter.com/ThinkerBigger'
        } />
      
      <FontAwesomeIcon
        icon={faSquareSteam}
        className="footer-icon"
        onClick={
          () => window.location.href = 'https://steamcommunity.com/id/TheThinkerBigger/'
        } />
      
      <FontAwesomeIcon
        icon={faSquareInstagram}
        className="footer-icon"
        onClick={
          () => window.location.href = 'https://www.instagram.com/_lucamodica_/'
        } />
      
      <FontAwesomeIcon
        icon={faSquareGithub}
        className="footer-icon"
        onClick={
          () => window.location.href = 'https://github.com/lucamodica'
        } />
    </footer>
  );
}