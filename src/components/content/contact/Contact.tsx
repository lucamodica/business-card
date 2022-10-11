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
        Email
      </button>
      <button className="btn linkedin-btn">
        <FontAwesomeIcon icon={faLinkedin} />
        LinkedIn
      </button>
    </div>
  );
}