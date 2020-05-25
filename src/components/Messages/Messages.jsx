import React from 'react';

import Interlocutors from './Interlocutors/Interlocutors';
import Dialogs from './Dialogs/Dialogs';

import './Messages.css';

const Messages = () => {
    return(
        <div className="messages">
            <Interlocutors class="messages__interlocutors" />
            <Dialogs />
        </div>
    );
}

export default Messages;
