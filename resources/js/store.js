import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import eventsReducer from './components/Events/eventReducer';

const rootReducer = combineReducers({
    events: eventsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
