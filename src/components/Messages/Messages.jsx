import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import Interlocutors from './Interlocutors/Interlocutors';
import './Messages.css';
import { Redirect } from 'react-router-dom';

const Messages = (props) => {

    if(!props.isAuth) return <Redirect to="/login" />

    return (
        <div className="messages">
            <Interlocutors
                listuser={props.state.listuser}
                class="messages__interlocutors"
            />
            <Dialogs
                dialogs={props.state.dialogs}
                messageTextTextarea={props.state.messageTextTextarea}
                sendMessage={props.sendMessage}
                changeMessage={props.changeMessage}
            />
        </div>
    );
}

export default Messages;
