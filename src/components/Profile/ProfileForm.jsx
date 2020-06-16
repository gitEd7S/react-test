import React from 'react'
import { Form, reset, Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls'
import { required, maxLength } from '../../utils/validators/validators'

const max = maxLength(10)

const resetProfileForm = (result, dispatch) => dispatch(reset('post'))

const ProfileFormRedux = (props) => {

    const { handleSubmit } = props

    return (
        <Form onSubmit={handleSubmit} className="create-post__form">
            <Field
                name="post"
                component={Textarea}
                validate={[required, max]}
                className="create-post__textarea"
                placeholder="Create new post"
            />
            <button className="create-post__submit"> Send </button>
        </Form>
    )
}

export const ProfileForm = reduxForm({
    form: 'post',
    onSubmitSuccess: resetProfileForm,
})(ProfileFormRedux)
