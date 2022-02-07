import React from "react";
import {Link} from "react-router-dom";

import './header.styles.scss'
import logo from '../../assets/logo.svg';
import {auth} from "../../Firebase/Firebase";

const Header = ({ currentUser }) => (
  <header className="header">
    <div className="logo-container">
      <Link to="/">
        <img src={logo} width={38} alt="logo"/>
      </Link>
    </div>
    <div className="options">
      <Link className="option" to="/shop">Shop</Link>
      <Link className="option" to="/contact">Contact</Link>
      { currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          Sign out
        </div>
      ) : (
        <Link className='option' to='/sign-in'>
          Sign in
        </Link>
      )}
    </div>
  </header>
)

export default Header