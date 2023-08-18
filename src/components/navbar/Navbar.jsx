import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links_logo">
          <img src={logo} />
        </div>
      <div className="navbar-links">
        {/* <div className="navbar-links_logo">
          <img src={logo} />
        </div> */}
        <div className="navbar-links_container">
          <p><a href="#home" className='home'>HOME</a></p>
          <p><a href="#med_prev" className='medicines'>MEDICINES</a></p>
          <p><a href="#doc_prev" className='doctors'>DOCTORS</a></p>
          <p><a href="#testimonials" className='doctors'>TESTIMONIALS</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <Link to='/Login'>
          <button type="button">Sign up</button>
        </Link>       
      </div>
    </div>
  )
}

export default Navbar;