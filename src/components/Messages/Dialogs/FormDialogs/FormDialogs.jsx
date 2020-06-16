import React from 'react'
import './FormDialogs.css'
import { reset, Field ,reduxForm } from 'redux-form'
import { required, maxLength } from '../../../../utils/validators/validators'
import { Textarea } from '../../../common/FormsControls/FormsControls'

const max = maxLength(10)

const resetFormDialogs = (result, dispatch) => dispatch(reset('dialogs'))

const Form = (props) => {

    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit} className="form-dialogs">
            <Field
                name="dialog"
                component={Textarea}
                className="form-dialogs__textarea"
                validate={[required, max]}
            />
            <button className="form-dialogs__button"> Send </button>
        </form>
    )
}

export const FormDialogs = reduxForm({
    form: 'dialogs',
    onSubmitSuccess: resetFormDialogs,
})(Form)
