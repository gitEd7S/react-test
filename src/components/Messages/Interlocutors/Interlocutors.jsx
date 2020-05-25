import React from 'react';
import {NavLink} from 'react-router-dom';

import NavbarDialog from './NavbarDialog/NavbarDialog';

import './Interlocutors.css';

const Interlocutors = (props) => {

    let dataDialogs = [
        { id: 1, name: 'Andrew', online: true },
        { id: 2, name: 'Dmitry', },
        { id: 3, name: 'Viktor' },
    ]

    let tplNavLink = dataDialogs.map((link, key) => {

        let isOnline = link.online ? true : false;

        return (
            <NavbarDialog
                key={key}
                id={link.id}
                name={link.name}
                online={isOnline}
            />
        );
    });

    return (
        <div className={`${props.class} interlocutors`}>
            <span className="interlocutors__title">Dialogs</span>
            <ul className="interlocutors__content"> { tplNavLink } </ul>
        </div>
    );
}

export default Interlocutors;
