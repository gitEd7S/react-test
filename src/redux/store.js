import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import profileReducer from "./profile/reducer"
import messagesReducer from "./messages/reducer"
import usersReducer from "./users/reducer"
import authReducer from "./auth/reducer"

const reducers = combineReducers({
    profileReducer,
    messagesReducer,
    usersReducer,
    authReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store
