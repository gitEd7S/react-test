import * as types from './types'

const initialState = {
    initialized: false,
}

export function appReducer (state = initialState, action) {
    switch(action.type) {
        case types.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default: return state;
    }
}
