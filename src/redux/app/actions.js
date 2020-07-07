import * as types from './types'
import { getAuthThunkCreator } from '../auth/actions'

export const initializedSucess = () => ({ type: types.INITIALIZED_SUCCESS })

export const initializedApp = () => (dispatch) => {
    const auth = dispatch(getAuthThunkCreator())
    Promise.all([auth]).then(() => {
        dispatch(initializedSucess())
    })
}
