import {GET_ALL_EVENTS, SEARCH_BY_TITLE, SORT_EVENTS} from "./eventTypes";

const initialState = {
    eventsList: [],
    searchResults: [],
    sortFilter: 'ALL',
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
        case SORT_EVENTS:
            return {
              ...state,
                sortFilter: action.payload.filter,
                eventsList: action.payload.items
            };
        default:
            return state;
    }
};

export default eventsReducer;
