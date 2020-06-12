import React, { useContext } from 'react'
import { BtnTheme } from '../BtnTheme';
import './Button.css'

function Button () {
    const theme = useContext(BtnTheme);
    const classButton = (theme === 'dark') ? 'btn--dark' : 'btn--ligth'
    return (
        <>
            <button className={`${classButton} btn`}>Context test</button>
        </>
    )
}

export default Button
