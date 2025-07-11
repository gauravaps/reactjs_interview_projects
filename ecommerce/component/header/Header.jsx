import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 

const cartItems = useSelector((state) => state.cart.items);
const cartCount = cartItems.length;



  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src="https://cdn-icons-png.flaticon.com/512/135/135620.png" alt="Logo" />
          <div className="logo-text">
            <span className="logo-fresh">fresh</span>
            <span className="logo-food">FOOD</span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="nav-links desktop-only">
          <Link to="/" className="active-link">Home</Link>

          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-toggle">Categories</span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/categories/vegetables">Vegetables</Link>
                <Link to="/categories/drinks">Drinks</Link>
                <Link to="/categories/fruits">Fruits</Link>
                <Link to="/categories/sweets">Sweets</Link>
              </div>
            )}
          </div>

          <Link to="/pages">Pages</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* Search + Icons */}
        <div className="search-icons desktop-only">
          <div className="search-box">
            <input type="text" placeholder="Search for product..." />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="icon-circle">
            <FaUser />
          </div>

          <div className="icon-circle cart-icon">
          <Link to="/cart">   <FaShoppingCart />
            <span className="cart-badge">{cartCount}</span>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="mobile-menu-btn mobile-only">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu mobile-only">
          <nav>
            <Link to="/">Home</Link>
            <details>
              <summary>Categories</summary>
              <div className="mobile-dropdown">
                <Link to="/categories/vegetables">Vegetables</Link>
                <Link to="/categories/drinks">Drinks</Link>
                <Link to="/categories/fruits">Fruits</Link>
                <Link to="/categories/sweets">Sweets</Link>
              </div>
            </details>
            <Link to="/pages">Pages</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
          </nav>
          <div className="mobile-search">
            <input type="text" placeholder="Search..." />
            <button><i className="fas fa-search"></i></button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
