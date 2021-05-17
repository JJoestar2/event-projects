import {GET_ALL_EVENTS, GET_CREATED_USER_EVENTS, SORT_EVENTS,
        FILTERED_EVENTS, DEFAULT_EVENT_LIST, SET_FILTER,
        REMOVE_FILTER, REMOVE_ALL_FILTERS} from "./eventTypes";

const initialState = {
    eventsList: [],
    createdEvents: [],
    sortFilter: 'ALL',
    eventFilters:[]
};

function eventsReducer(state = initialState, action) {

    switch (action.type)
    {
        case GET_ALL_EVENTS:
            return {
                ...state,
                eventsList: action.payload
            };

        case GET_CREATED_USER_EVENTS:
            return {
                ...state,
                createdEvents: action.payload
            };

        case SORT_EVENTS:
            return {
              ...state,
                sortFilter: action.payload.filter,
                eventsList: action.payload.items
            };

        case FILTERED_EVENTS:
            return {
              ...state,
              eventsList: action.payload
            };

        case DEFAULT_EVENT_LIST:
            return {
                ...state,
                eventsList: action.payload
            }

        case SET_FILTER:
            return {
                ...state,
                eventFilters: [
                    ...state.eventFilters,
                    action.payload
                ]
            }

        case REMOVE_FILTER:
            return {
                ...state,
                eventFilters: state.eventFilters.filter(item => item.type != action.payload.type)
            }

        case REMOVE_ALL_FILTERS:
            return {
                ...state,
                eventFilters: []
            }

        default:
            return state;
    }
};

export default eventsReducer;
