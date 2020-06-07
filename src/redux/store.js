import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from "./profile/reducer";
import messagesReducer from "./messages/reducer";
import usersReducer from "./users/reducer";
import authReducer from "./auth/reducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    profileReducer,
    messagesReducer,
    usersReducer,
    authReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
