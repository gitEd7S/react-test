import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarDialog = (props) => {
    const online = props.online ? 'interlocutors__link--online' : ''
    return (
        <li className="interlocutors__item">
            <NavLink
                to={`/messages/${props.id}`}
                className={`interlocutors__link ${online}`}
                activeClassName="interlocutors__link--active"
            >
                {props.name}
            </NavLink>
        </li>
    )
}

export default NavbarDialog
