import React from 'react'
import Dialog from './Dialog/Dialog'
import { FormDialogs } from './FormDialogs/FormDialogs'
import './Dialogs.css'

const Dialogs = (props) => {

    const sendFormMessage = (values) => {
        props.sendMessage(values.dialog)
    }

    const tplDialogs = props.dialogs.map((post) => {
        return (
            <Dialog
                key={post.id}
                class="dialogs__dialog"
                name={post.name}
                picture={post.picture}
                message={post.message}
            />
        )
    })
    return(
        <div className="dialogs">
            <div className="dialogs__wrapper"> { tplDialogs } </div>
            <FormDialogs onSubmit={sendFormMessage} />
        </div>
    )
}

export default Dialogs
