import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg" alt="" className={classes.header__image} />
            <div className={classes.login}>
                {
                    props.isAuth
                    ? <span>{props.login}</span>
                    :  <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header
