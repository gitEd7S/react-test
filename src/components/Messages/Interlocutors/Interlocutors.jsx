import React from 'react';
import NavbarDialog from './NavbarDialog/NavbarDialog';
import './Interlocutors.css';

const Interlocutors = (props) => {

    const tplNavLink = props.listuser.map((link, key) => {
        return (
            <NavbarDialog
                key={key}
                id={link.id}
                name={link.name}
                online={link.online ? true : false}
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
