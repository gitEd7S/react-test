import React from 'react'
import { connect } from 'react-redux'
import { LoginFormRedux } from './LoginForm'
import { login } from '../../redux/auth/actions'
import './Login.css'

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.remember)
        console.log('Success')
    }

    return (
        <div className="login">
            <h1 className="login__title">Login</h1>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>
    )
}

export default connect(null, { login })(Login)
