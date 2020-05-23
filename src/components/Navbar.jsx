import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <a href="#" className="navbar__link">Profile</a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">Messages</a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">News</a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">Music</a>
                </li>
                <li className="navbar__settings">
                    <a href="#" className="navbar__link">Settings</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
