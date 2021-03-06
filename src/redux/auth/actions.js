import { stopSubmit } from 'redux-form'
import * as types from './types'
import { API } from "../../api/api"

export const setUserData = (data, isAuth) => ({ type: types.SET_USER_DATA, payload: { data, isAuth } })

export const getAuthThunkCreator = () => (dispatch) => {
    API.getAuth().then(response => {
        if(response.resultCode === 0) { dispatch(setUserData(response.data, true)) }
    })
}

export const login = (email, password, remember) => (dispatch) => {
    API.login(email, password, remember).then(response => {
        if(response.resultCode === 0) {
            dispatch(getAuthThunkCreator())
        } else {
            dispatch(stopSubmit('login', { email: response.messages.length > 0 ? response.messages : 'Some error' }))
        }
    })
}

export const logout = () => (dispatch) => {
    API.logout().then(response => {
        if(response.resultCode === 0) {
            dispatch(setUserData(null, false))
        }
    })
}
