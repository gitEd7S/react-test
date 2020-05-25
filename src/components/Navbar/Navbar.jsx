import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <NavLink
                        to="/profile"
                        className="navbar__link"
                        activeClassName="navbar__link--active"
                    >
                        Profile
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink
                        to="/messages"
                        className="navbar__link"
                        activeClassName="navbar__link--active"
                    >
                        Messages
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink
                        to="/news"
                        className="navbar__link"
                        activeClassName="navbar__link--active"
                    >
                        News
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink
                        to="/music"
                        className="navbar__link"
                        activeClassName="navbar__link--active"
                    >
                        Music
                    </NavLink>
                </li>
                <li className="navbar__settings">
                    <NavLink
                        to="/settings"
                        className="navbar__link"
                        activeClassName="navbar__link--active"
                    >
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
