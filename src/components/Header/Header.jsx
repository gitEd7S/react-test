import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import { Redirect } from "react-router-dom"

const Header = (props) => {

    const onLogout = () => { props.logout() }

    return (
        <header className={classes.header}>
            <img src="https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg" alt="" className={classes.header__image} />
            <div className={classes.login}>
                {
                    props.isAuth
                    ? <span className={classes.headerName}>{props.login}</span>
                    :  <NavLink to='/login'>Login</NavLink>
                }
                { props.isAuth && <span onClick={onLogout} className={classes.headerLogout}>Logout</span> }
            </div>
        </header>
    )
}

export default Header
