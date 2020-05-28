import React from 'react';
import Dialog from './Dialog/Dialog';
import './Dialogs.css';
import FormDialogs from '../FormDialogs/FormDialogs';

const Dialogs = (props) => {

    const tplDialog = props.data.dialogs.map((post, key) => {
        return (
            <Dialog
                key={key}
                class="dialogs__dialog"
                name={post.name}
                picture={post.picture}
                message={post.message}
            />
        );
    })

    return(
        <div className="dialogs">
            <div className="dialogs__wrapper">
                { tplDialog }
            </div>
            <FormDialogs
                value={props.data.messageTextTextarea}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Dialogs;
