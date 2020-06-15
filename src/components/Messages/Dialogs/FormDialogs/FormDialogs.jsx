import React from 'react'
import './FormDialogs.css'
import { reset, Field ,reduxForm } from 'redux-form'

const resetFormDialogs = (result, dispatch) => dispatch(reset('dialogs'))

const Form = (props) => {

    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit} className="form-dialogs">
            <Field
                name="dialog"
                component="textarea"
                className="form-dialogs__textarea"
            />
            <button className="form-dialogs__button"> Send </button>
        </form>
    )
}

export const FormDialogs = reduxForm({
    form: 'dialogs',
    onSubmitSuccess: resetFormDialogs,
})(Form)
