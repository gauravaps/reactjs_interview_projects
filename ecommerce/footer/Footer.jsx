import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLanguage } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../reduxToolkit/searchSlice';

const Footer = () => {
  const dispatch = useDispatch();

const handleHomeClick = () => {
  dispatch(setSearchQuery('')); // 🔄 clear search query
};



  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Column 1: Logo & Contact */}
        <div className="footer-column">
          <Link to={'/'} onClick={handleHomeClick} > 
          <div className="footer-logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/135/135620.png"
              alt="logo"
            />
            <div className="footer-brand">Fresh Food</div>
            
          </div>
          </Link>
          <ul className="footer-contact">
            <li><MdLanguage /> <span>www.Gauravfood.com</span></li>
            <li><MdEmail /> <span>help@Gauravfood.com</span></li>
            <li><MdPhone /> <span>+91-8109107318</span></li>
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/512px-Download_on_the_App_Store_RGB_blk.svg.png"
              alt="App Store"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1920px-Google_Play_Store_badge_EN.svg.png"
              alt="Play Store"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 - 2026 Gaurav Food, LLC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
