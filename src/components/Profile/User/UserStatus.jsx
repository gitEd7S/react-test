import React, { useState } from 'react'
import './User.css'

const UserStatus = (props) => {

    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    const useEditDisactivated = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const useEditActivated = () => setEditMode(true)

    const changeInput = e => setStatus(e.target.value)

    return(
        <div className="status">
            {!editMode && <span className="status__title" onDoubleClick={useEditActivated}>{status}</span>}
            {editMode &&
                <input
                    type="text"
                    value={status}
                    className="status__input"
                    onBlur={useEditDisactivated}
                    onChange={changeInput}
                    autoFocus
                />
            }
        </div>
    )
}

export default UserStatus
