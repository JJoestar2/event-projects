import {GET_ALL_EVENTS, SORT_EVENTS} from "./eventTypes";

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

        default:
            return state;
    }
};

export default eventsReducer;
