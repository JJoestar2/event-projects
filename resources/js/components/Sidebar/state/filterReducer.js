import {GET_ALL_TYPES, GET_ALL_CATEGORIES} from "./filterTypes";

const initialState = {
   eventCategories: [],
   eventTypes: [],
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

        default:
            return state;
    }
}

export default filterReducer;
