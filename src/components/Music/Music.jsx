import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './Music.css'

const Music = () => (
    <>
        <Formik
            initialValues={{ login: '', password: '', isRemember: false }}
            validate={values => {

                const errors = { }

                if(!values.login.length) { errors.login = "Login is required" }
                else if (!values.password.length) { errors.password = "Password is required" }
                else if (!values.isRemember) { errors.isRemember = "Remember is required" }

                return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                setSubmitting(false)
            }}
        >
            {({ isSubmitting }) => (
                <div className="login">
                    <h1 className="login__title">Login</h1>
                    <Form className="login__form">
                        <div className="login__row">
                            <Field
                                type="text"
                                name="login"
                                className="login__input"
                                placeholder="Login"
                            />
                            <ErrorMessage name="login" component="span" className="error" />
                        </div>
                        <div className="login__row">
                            <Field
                                type="password"
                                name="password"
                                className="login__input"
                                placeholder="Password"
                            />
                            <ErrorMessage name="password" component="span" className="error" />
                        </div>
                        <div className="login__group">
                            <Field
                                type="checkbox"
                                name="isRemember"
                                id="isRemember"
                                className="login__ckeck"
                            />
                            <label htmlFor="isRemember" className="login__text">Remember me</label>
                            <ErrorMessage name="isRemember" component="span" className="error" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className="login__submit"> Login </button>
                    </Form>
                </div>
            )}
        </Formik>
    </>
)

export default Music
