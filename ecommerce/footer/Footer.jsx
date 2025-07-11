import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLanguage } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Column 1: Logo & Contact */}
        <div className="footer-column">
          <div className="footer-logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/135/135620.png"
              alt="logo"
            />
            <div className="footer-brand">Fresh Food</div>
          </div>
          <ul className="footer-contact">
            <li><MdLanguage /> <span>www.freshfood.com</span></li>
            <li><MdEmail /> <span>help@freshfood.com</span></li>
            <li><MdPhone /> <span>+8801234567890</span></li>
          </ul>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Fresh Food Pages</h3>
          <ul className="footer-links">
            <li>Home</li>
            <li>Categories</li>
            <li>Blog</li>
            <li>Terms And Conditions</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>About us</li>
          </ul>
        </div>

        {/* Column 3: Social + App Buttons */}
        <div className="footer-column">
          <h3 className="footer-heading">Follow us on</h3>
          <ul className="footer-social">
            <li><FaFacebookF /> <span>Facebook</span></li>
            <li><FaTwitter /> <span>Twitter</span></li>
            <li><FaInstagram /> <span>Instagram</span></li>
          </ul>
          <div className="footer-apps">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_(black)_SVG.svg"
              alt="App Store"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Get_it_on_Google_play.svg"
              alt="Play Store"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2002 - 2025 Fresh Food, LLC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
