import React from 'react';
import Interlocutors from './Interlocutors/Interlocutors';
import Dialogs from './Dialogs/Dialogs';
import './Messages.css';

const Messages = (props) => {
    return(
        <div className="messages">
            <Interlocutors listuser={props.listuser} class="messages__interlocutors" />
            <Dialogs dialogs={props.dialogs} />
        </div>
    );
}

export default Messages;
