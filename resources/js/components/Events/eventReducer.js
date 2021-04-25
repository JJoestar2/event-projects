import {GET_ALL_EVENTS} from "./eventTypes";

const initialState = {
    eventsList: []
};

function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_EVENTS:
            return {
                ...state,
                eventsList: action.payload
            };
        default:
            return state;
    }
};

export default eventsReducer;
