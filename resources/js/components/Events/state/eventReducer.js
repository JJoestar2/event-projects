import {
    GET_ALL_EVENTS, GET_CREATED_USER_EVENTS, GET_MEMBERED_USER_EVENTS,
    SORT_EVENTS, DEFAULT_EVENT_LIST,
    SET_FILTER, REMOVE_FILTER, REMOVE_ALL_FILTERS, LOADING, LOADED
} from "./eventTypes";

const initialState = {
    eventsList: [],
    createdEvents: [],
    memberedEvents: [],
    sortFilter: 'ALL',
    eventFilters:[],
    isLoaded: false
};

function eventsReducer(state = initialState, action) {

    switch (action.type)
    {
        case GET_ALL_EVENTS:
            return {
                ...state,
                eventsList: action.payload.events
            };

        case LOADING:
            return {
                ...state,
                isLoaded: false
            }

        case LOADED:
            return {
                ...state,
                isLoaded: true
            }

        case GET_CREATED_USER_EVENTS:
            return {
                ...state,
                createdEvents: action.payload
            };

        case GET_MEMBERED_USER_EVENTS:
            return {
                ...state,
                memberedEvents: action.payload
            };

        case SORT_EVENTS:
            return {
              ...state,
                sortFilter: action.payload.filter,
                eventsList: {
                  ...state.eventsList,
                    data:action.payload.items.data
                }
            };

            case DEFAULT_EVENT_LIST:
            return {
                ...state,
                eventsList: action.payload.events
            };

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
