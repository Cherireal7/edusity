import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link, ScrollLink } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

const [mobileMenu, setMobileMenu] = useState(true);
const toggleMenu = () => {
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

}


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Site logo" className="logo" />
      
      <ul className= {mobileMenu? 'hide-mobile-menu' : 'show-mobile-menu'} > 
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            <button className="btn">Contact Us</button>
          </Link>
        </li>
      </ul>
      <img src={menu_icon} className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
