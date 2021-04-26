import {GET_ALL_EVENTS, SEARCH_BY_TITLE} from "./eventTypes";

const initialState = {
    eventsList: [],
    searchResults: []
};

function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_EVENTS:
            return {
                ...state,
                eventsList: action.payload
            };
        case SEARCH_BY_TITLE:
            return {
              ...state,
              searchResults: action.payload
            };
        default:
            return state;
    }
};

export default eventsReducer;
