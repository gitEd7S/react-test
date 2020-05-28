import React from 'react';
import Interlocutors from './Interlocutors/Interlocutors';
import Dialogs from './Dialogs/Dialogs';
import './Messages.css';

const Messages = (props) => {
    return(
        <div className="messages">
            <Interlocutors listuser={props.data.listuser} class="messages__interlocutors" />
            <Dialogs
                data={props.data}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Messages;
