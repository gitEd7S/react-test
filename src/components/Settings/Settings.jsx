import React from 'react'
import Button from './Elements/Button'
import './Settings.css'
import { BtnTheme } from './BtnTheme'

const Settings = () => {
    return (
        <>
            <span className="title">Settings</span>
            {/* <BtnTheme.Provider value="dark"> */}
                <Button />
            {/* </BtnTheme.Provider> */}
        </>
    )
}

export default Settings
