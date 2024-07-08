// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        <div className="footer-social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrp0PFy-LIw_uHlCce1Fnastb6RLTCJzJgPA&s" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="" >
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8aeYQFEgeMAlvWARGlQ5LBT9zGgIvpDitBw&s" alt="noopener" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-512.png" alt="Instagram" />
          </a>
        </div>
        <p>&copy; 2024 Fruit Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
