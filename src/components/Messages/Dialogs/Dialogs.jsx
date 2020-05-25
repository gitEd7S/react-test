import React from 'react';

import Dialog from '../Dialog/Dialog';

import './Dialogs.css';

const Dialogs = () => {
    return(
        <div className="dialogs">
            <div className="dialogs__wrapper">
                <Dialog class="dialogs__dialog" />
            </div>
        </div>
    );
}

export default Dialogs;
