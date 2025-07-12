import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import { useSelector ,useDispatch} from 'react-redux';
import { setSearchQuery } from '../../reduxToolkit/searchSlice';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const [localSearch, setLocalSearch] = useState('');


const cartItems = useSelector((state) => state.cart.items);
const query = useSelector((state) => state.search.query);

const cartCount = cartItems.length;
  const dispatch = useDispatch();

const handleHomeClick = () => {
  dispatch(setSearchQuery('')); 

};


useEffect(() => {
  setLocalSearch(query);
}, [query]);



  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to={'/'} onClick={handleHomeClick} > 
          <img src="https://cdn-icons-png.flaticon.com/512/135/135620.png" alt="Logo" />
          </Link>
          <div className="logo-text">
            <Link to={'/'}> 
            <span className="logo-fresh">fresh</span>
            <br />
            <span className="logo-food">FOOD</span>
            </Link>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="nav-links desktop-only">
          <Link to="/" className="active-link" onClick={handleHomeClick} >Home</Link>

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
            <input type="text" placeholder="Search for product..." 
            // value={query}
              value={localSearch}

            onChange={(e) => dispatch(setSearchQuery(e.target.value.toLowerCase()))}
            // onChange={(e) => setLocalSearch(e.target.value)}

            />
            <button  onClick={() => dispatch(setSearchQuery(localSearch.toLowerCase()))} >
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="icon-circle">
            <Link to="/register" className="icon-circle">
    <FaUser />
  </Link>
          </div>

          {/* Mobile Cart Icon */}
<div className="icon-circle cart-icon">
  <Link to="/cart">
    <FaShoppingCart />
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

<div className="mobile-cart mobile-only">
  <Link to="/cart" className="icon-circle cart-icon">
    <FaShoppingCart />
    <span className="cart-badge">{cartCount}</span>
  </Link>
</div>

<div className="mobile-user mobile-only">
  <Link to="/register" className="icon-circle">
    <FaUser />
  </Link>
</div>


</div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu mobile-only">
          <nav>
            <Link to="/" onClick={handleHomeClick}>Home</Link>
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
  <input
    type="text"
    placeholder="Search for product..."
    value={localSearch}
    onChange={(e) => {
      setLocalSearch(e.target.value);
      dispatch(setSearchQuery(e.target.value.toLowerCase()));
    }}
  />
  <button onClick={() => dispatch(setSearchQuery(localSearch.toLowerCase()))}>
    <i className="fas fa-search"></i>
  </button>
</div>


        </div>
      )}





    </header>
  );
};

export default Header;
