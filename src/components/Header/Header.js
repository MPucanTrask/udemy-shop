import React from "react";
import {Link} from "react-router-dom";

import './header.styles.scss'
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} width={32} alt="logo"/>
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/test">Contact</Link>
      </div>
    </header>
  )
}

export default Header