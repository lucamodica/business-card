import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Contact() {
  return (
    <div className="contact">
      <button className="btn email-btn">
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:lucamodica.business@gmail.com">
          Email
        </a>
      </button>
      
      <a href="https://www.linkedin.com/in/lucamodica/">
        <button className="btn linkedin-btn">
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </button>
      </a>
    </div>
  );
}