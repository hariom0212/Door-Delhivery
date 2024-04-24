import React, {useState} from 'react'
import "../css/navbar.css";
import logo from './images/logo1.jpg'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
      <nav className="navbar">
      <div className="logo"> <img src={logo} alt="Logo" id='head' /> </div>
      <div className={`menu ${isOpen ? 'active' : ''}`}>
        <a href="./">Home</a>
        <a href="./about">About</a>
        <a href="./services">Services</a>
        <a href="./contactus">Contact</a>
        <a href="./blog">Blog</a>
        <a href="./faq">FAQ's</a>
        <a href="./privacy">Privacy Policy</a>

      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
    </div>
  )
}
