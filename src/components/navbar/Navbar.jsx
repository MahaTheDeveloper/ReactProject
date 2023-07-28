import React,{ useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='inferno__navbar'>
      <div className='inferno__navbar-links'>
        <div className='inferno__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='inferno__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#inferno'>What is Inferno?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Our Games</a></p>
          <p><a href='#blog'>News</a></p>
        </div>
      </div>
      <div className='inferno__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='inferno__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
        <div className="inferno__navbar-menu_container scale-up-center">
          <div className="inferno__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#inferno">What is Inferno?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Blog</a></p>
          </div>
          <div className="inferno__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;