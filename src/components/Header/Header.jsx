import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg" alt="" className={classes.header__image} />
        </header>
    );
}

export default Header;
