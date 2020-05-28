import React from 'react';
import './FormDialogs.css';
import { dialogAddMessage, dialogChangeForm } from '../../../redux/messages/reducers';

const FormDialogs = (props) => {

    const changeFormMessage = (e) => {
        const action = dialogChangeForm(e.target.value);
        props.dispatch(action)
    }

    const sendFormMessage = () => {
        props.dispatch(dialogAddMessage())
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
            >
                Send
            </button>
        </div>
    )
}

export default FormDialogs;
