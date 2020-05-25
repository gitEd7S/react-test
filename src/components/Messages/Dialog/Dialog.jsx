import React from 'react';
import './Dialog.css';

const Dialog = (props) => {
    return (
        <div className={`${props.class} dialog`}>
            <div className="dialog__header">
                <picture className="dialog__picture">
                    <img src="https://www.freepnglogos.com/uploads/smile-png/smile-index-images-24.png" alt="" className="dialog__image"/>
                </picture>
                <span className="dialog__name">Andrew</span>
            </div>
            <div className="dialog__body">
                <p className="dialog__message">
                    I am a normal popover and I can have text and everything.
                    I am a normal popover and I can have text and everything.
                </p>
            </div>
        </div>
    );
}

export default Dialog;