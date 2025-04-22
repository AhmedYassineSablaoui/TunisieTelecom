import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import telecomlogo from '../asset/telecomlogo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"> <img src={telecomlogo} alt="Logo" /></div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/network-generations">Network Generations</Link></li>
                <li><Link to="/site-gsm">Site GSM</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
