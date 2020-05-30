import React from 'react';
import './FormDialogs.css';

const FormDialogs = (props) => {

    const changeFormMessage = (e) => {
        props.changeMessage(e.target.value)
    }

    const sendFormMessage = () => {
        props.sendMessage()
    }

    return (
        <div className="form-dialogs">
            <textarea
                className="form-dialogs__textarea"
                onChange={changeFormMessage}
                value={props.value}
            />
            <button
                type="button"
                className="form-dialogs__button"
                onClick={sendFormMessage}
            >  Send </button>
        </div>
    )
}

export default FormDialogs;
