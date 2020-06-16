import React from 'react'
import './FormsControls.css'

export const Textarea = ({ input, className, meta: { error, touched } }) => {
    return (
        <React.Fragment>
            <textarea
                {...input}
                className={`${className} ${(touched && (error && 'error'))}`}
            />
            { touched && (error && <span className="error">{ error }</span>) }
        </React.Fragment>
    )
}

export const Input = ({ input, className, type, placeholder, meta: { error, touched } }) => {
    return (
        <React.Fragment>
            <input
                {...input}
                type={type}
                className={`${className} ${(touched && (error && 'error'))}`}
                placeholder={placeholder}
            />
            { touched && (error && <span className="error">{ error }</span>) }
        </React.Fragment>
    )
}

export const Checkbox = ({ input, className, type, id, meta: { error, touched } }) => {
    return (
        <React.Fragment>
            <input
                {...input}
                type={type}
                className={`${className} ${(touched && (error && 'error'))}`}
                id={id}
            />
            <label htmlFor={id} className="login__text">Remember me</label>
            { touched && (error && <span className="error">{ error }</span>) }
        </React.Fragment>
    )
}
