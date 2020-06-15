import React from 'react'
import { reset, Field, reduxForm } from 'redux-form'

const resetLoginFormRedux = (result, dispatch) => dispatch(reset('login'))

const LoginForm = (props) => {

    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit} className="login__form">
            <Field
                type="text"
                name="login"
                component="input"
                className="login__input"
                placeholder="Login"
            />
            <Field
                type="password"
                name="password"
                component="input"
                className="login__input"
                placeholder="Password"
            />
            <div className="login__group">
                <Field
                    type="checkbox"
                    name="remember"
                    component="input"
                    id="remember"
                    className="login__ckeck"
                />
                <label htmlFor="remember" className="login__text">Remember me</label>
            </div>
            <button className="login__submit">Login</button>
        </form>
    )
}

export const LoginFormRedux = reduxForm({
    form: 'login',
    onSubmitSuccess: resetLoginFormRedux,
})(LoginForm)
