import React from "react";
import logo from '../../assets/logo.svg';

import './header.styles.scss'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} width={32}/>
                </Link>
            </div>
            <div className="options">
                <Link to="/" className="option">
                    <></>
                </Link>
                <Link to="/" className="option">
                    <></>
                </Link>
                <Link to="/" className="option">
                    <></>
                </Link>
            </div>
        </header>
    )
}

export default Header