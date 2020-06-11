import React, { useContext } from 'react'
import './Button.css'
import { BtnTheme } from '../BtnTheme';

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
