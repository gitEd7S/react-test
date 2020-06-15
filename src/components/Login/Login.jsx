import React from 'react'
import './Login.css'
import { LoginFormRedux } from './LoginForm'

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className="login">
            <h1 className="login__title">Login</h1>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>
    )
}

export default Login
