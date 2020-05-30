import React from 'react';
import Dialog from './Dialog/Dialog';
import './Dialogs.css';
import FormDialogs from './FormDialogs/FormDialogs';

const Dialogs = (props) => {

    const tplDialogs = props.dialogs.map((post) => {
        return (
            <Dialog
                key={post.id}
                class="dialogs__dialog"
                name={post.name}
                picture={post.picture}
                message={post.message}
            />
        );
    })

    return(
        <div className="dialogs">
            <div className="dialogs__wrapper"> { tplDialogs } </div>
            <FormDialogs
                value={props.messageTextTextarea}
                sendMessage={props.sendMessage}
                changeMessage={props.changeMessage}
            />
        </div>
    );
}

export default Dialogs;
