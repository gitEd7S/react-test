import React from 'react';
import Dialog from './Dialog/Dialog';
import './Dialogs.css';

const Dialogs = (props) => {

    let tplDialog = props.dialogs.map((post, key) => {
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
        </div>
    );
}

export default Dialogs;
