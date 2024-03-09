import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {Link} from 'react-scroll'
import menu_icon from '../../assets/edusity_assets/menu-icon.png'
import logo from "../../assets/edusity_assets/logo.png";
function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenue] = useState(false);
  const toggleMenu =()=>{
    mobileMenu ? setMobileMenue(false): setMobileMenue(true);
  }
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
}
export default Navbar;
