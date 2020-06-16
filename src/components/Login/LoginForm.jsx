import React from 'react'
import { reset, Field, reduxForm } from 'redux-form'
import { Input, Checkbox } from '../common/FormsControls/FormsControls'
import { required, maxLength } from '../../utils/validators/validators'

const resetLoginFormRedux = (result, dispatch) => dispatch(reset('login'))

const LoginForm = (props) => {

    const { handleSubmit } = props
    const maxLogin = maxLength(5)

    return (
        <form onSubmit={handleSubmit} className="login__form">
            <div className="login__row">
                <Field
                    type="text"
                    name="login"
                    component={Input}
                    className="login__input"
                    placeholder="Login"
                    validate={[required, maxLogin]}
                />
            </div>
            <div className="login__row">
                <Field
                    type="password"
                    name="password"
                    component={Input}
                    className="login__input"
                    placeholder="Password"
                    validate={[required]}
                />
            </div>
            <div className="login__group">
                <Field
                    type="checkbox"
                    name="remember"
                    component={Checkbox}
                    id="remember"
                    className="login__ckeck"
                    validate={[required]}
                />
            </div>
            <button className="login__submit">Login</button>
        </form>
    )
}

export const LoginFormRedux = reduxForm({
    form: 'login',
    onSubmitSuccess: resetLoginFormRedux,
})(LoginForm)
