import React from 'react';
import './Dialog.css';

const Dialog = (props) => {
    return (
        <div className={`${props.class} dialog`}>
            <div className="dialog__header">
                <picture className="dialog__picture">
                    <img src={props.picture} alt="" className="dialog__image"/>
                </picture>
                <span className="dialog__name">{props.name}</span>
            </div>
            <div className="dialog__body">
                <p className="dialog__message">
                    {props.message}
                </p>
            </div>
        </div>
    );
}

export default Dialog;
