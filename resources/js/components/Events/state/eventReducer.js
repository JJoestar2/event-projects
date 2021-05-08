import {GET_ALL_EVENTS, SORT_EVENTS, FILTER_EVENTS, CLEAR_FILTERS} from "./eventTypes";

const initialState = {
    eventsList: [],
    sortFilter: 'ALL',
};

function eventsReducer(state = initialState, action) {

    switch (action.type)
    {
        case GET_ALL_EVENTS:
            return {
                ...state,
                eventsList: action.payload
            };

        case SORT_EVENTS:
            return {
              ...state,
                sortFilter: action.payload.filter,
                eventsList: action.payload.items
            };
        case FILTER_EVENTS:
            return {
              ...state,
              eventsList: action.payload
            };

        case CLEAR_FILTERS:
            return {
                ...state,
                eventsList: action.payload
            }

        default:
            return state;
    }
};

export default eventsReducer;
