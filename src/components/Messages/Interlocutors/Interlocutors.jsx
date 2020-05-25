import React from 'react';
import {NavLink} from 'react-router-dom';

import './Interlocutors.css';

const NavbarDialog = (props) => {

    let online = props.online ? 'interlocutors__link--online' : '';

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
    );
}

const Interlocutors = (props) => {

    let dataDialogs = [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Dmitry' },
        { id: 3, name: 'Viktor' },
    ]

    return (
        <div className={`${props.class} interlocutors`}>
            <span className="interlocutors__title">Dialogs</span>
            <ul className="interlocutors__content">
                <NavbarDialog id="1" name="Andrew" online/>
                <NavbarDialog id="2" name="Dmitry"/>
                <NavbarDialog id="3" name="Viktor"/>
            </ul>
        </div>
    );
}

export default Interlocutors;