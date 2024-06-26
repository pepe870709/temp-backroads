import React from 'react';
import Logo from '../images/logo.svg';
import { LinkData, SocialLink } from './Data'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={Logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      
      
      <ul className="nav-links" id="nav-links">
        {LinkData.map((link) => {
          return <li key={link.id}>
            <a href={link.href} className="nav-link"> {link.text} </a>
          </li>
        })}
      </ul>

      <ul className="nav-icons" id="nav-icons">
        {SocialLink.map((link) => {
          const {id, href, icon} = link;
          return (
            <li key={id}>
              <a href={href} target="_blank" rel="noreferrer" className="nav-icon"
              ><i className={icon}></i></a>
            </li>
          )
        })}
        {/*<li>
          <a href="https://www.twitter.com" target="_blank" className="nav-icon"
            ><i className="fab fa-facebook"></i></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="nav-icon"
            ><i className="fab fa-twitter"></i></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="nav-icon"
            ><i className="fab fa-squarespace"></i></a>
        </li>*/}
      </ul>
    </div>
  </nav>
  </div>
  )
}

export default Navbar