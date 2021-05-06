import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import eventsReducer from './components/Events/state/eventReducer';
import searchReducer from "./components/SearchBox/state/searchReducer";
import filterReducer from "./components/Sidebar/state/filterReducer";

const rootReducer = combineReducers({
    events: eventsReducer,
    search: searchReducer,
    filter: filterReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
