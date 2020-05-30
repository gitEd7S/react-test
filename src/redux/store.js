import {createStore, combineReducers} from 'redux';
import profileReducer from "./profile/reducer";
import messagesReducer from "./messages/reducer";
import usersReducer from "./users/reducer";

const reducers = combineReducers({
    profileReducer,
    messagesReducer,
    usersReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
