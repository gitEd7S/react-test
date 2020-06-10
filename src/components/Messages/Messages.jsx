import React from 'react'
import Dialogs from './Dialogs/Dialogs'
import Interlocutors from './Interlocutors/Interlocutors'
import './Messages.css'

const Messages = (props) => {
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
    )
}

export default Messages
