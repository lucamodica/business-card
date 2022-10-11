import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Contact() {
  return (
    <div className="contact">
      <button
        onClick={() => window.location.href = 'mailto:lucamodica.business@gmail.com'}
        className="btn email-btn">
        <FontAwesomeIcon icon={faEnvelope} />
        Email
      </button>
      
      <button
        className="btn linkedin-btn"
        onClick={
          () => window.location.href = 'https://www.linkedin.com/in/lucamodica/'
        }>
        <FontAwesomeIcon icon={faLinkedin} />
        LinkedIn
      </button>
    </div>
  );
}