import {GET_ALL_TYPES, GET_ALL_CATEGORIES, SET_FILTER, REMOVE_FILTER, REMOVE_ALL_FILTERS} from "./filterTypes";

const initialState = {
   eventCategories: [],
   eventTypes: [],
   eventFilters:[]
};

function filterReducer(state = initialState, action) {
    switch (action.type)
    {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                eventCategories: action.payload
            };

        case GET_ALL_TYPES:
            return {
                ...state,
                eventTypes: action.payload
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
}

export default filterReducer;
