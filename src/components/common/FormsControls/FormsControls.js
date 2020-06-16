import React from 'react'
import './FormsControls.css'

export const Textarea = ({ input, className, meta: { error, touched } }) => {
    return (
        <>
            <textarea
                {...input}
                className={`${className} ${(touched && (error && 'error'))}`}
            />
            { touched && (error && <span className="error">{ error }</span>) }
        </>
    )
}