import { faSquareFacebook, faSquareGithub, faSquareInstagram, faSquareTwitter, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <FontAwesomeIcon icon={faSquareTwitter} className="footer-icon" />
      <FontAwesomeIcon icon={faSquareFacebook} className="footer-icon" />
      <FontAwesomeIcon icon={faSquareInstagram} className="footer-icon" />
      <FontAwesomeIcon icon={faSquareGithub} className="footer-icon" />
    </footer>
  );
}