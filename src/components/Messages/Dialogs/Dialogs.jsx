import React from 'react';

import Dialog from './Dialog/Dialog';

import './Dialogs.css';

const Dialogs = () => {

    let dialogData = [
        {
            name: 'Andrew',
            picture: 'https://www.freepnglogos.com/uploads/smile-png/smile-index-images-24.png',
            message: 'I am a normal popover and I can have text and everything.',
        },
        {
            name: 'Dmitry',
            picture: 'https://www.freepnglogos.com/uploads/smile-png/smile-index-images-24.png',
            message: 'I am a normal popover and I can have text and everything.',
        },
        {
            name: 'Viktor',
            picture: 'https://www.freepnglogos.com/uploads/smile-png/smile-index-images-24.png',
            message: 'I am a normal popover and I can have text and everything. I am a normal popover and I can have text and everything.',
        },
    ];

    let tplDialog = dialogData.map((post, key) => {
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
