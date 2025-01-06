import React from 'react';
import '../Style/Footer.css'; // Importez le fichier CSS
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importez les icônes

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-names">
          <p>&copy; 2024 Med Amine Chalbi & Beya Ben Ahmed</p>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon">
            <FaFacebook />
          </a>
          <a href="#" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon">
            <FaLinkedin />
          </a>
        </div>
        <div className="footer-links">
          <a href="#">À propos</a>
          <a href="#">Services</a>
          <a href="/Contact" className="cta">
            <span>Contact Us &nbsp;</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5" />
              <polyline points="8 1 12 5 8 9" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
