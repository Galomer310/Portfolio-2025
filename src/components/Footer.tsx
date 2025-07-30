import React from "react";
// Import social icons from react-icons/fa.
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
// Footer component display social media links and copyright info.
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="social-icons">
        <a
          href="https://mail.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/gal-omer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Galomer310"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://x.com/Gal__omer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Gal Omer. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
