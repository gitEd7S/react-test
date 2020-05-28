import {createStore, combineReducers} from 'redux';
import profileReducer from "./profile/reducers";
import messagesReducer from "./messages/reducers";

const reducers = combineReducers({
    profileReducer,
    messagesReducer
});

const store = createStore(reducers);

export default store;
