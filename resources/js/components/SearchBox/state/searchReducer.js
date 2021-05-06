import {SEARCH_BY_TITLE} from "./searchTypes";

const initialState = {
    searchResults: []
};

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_BY_TITLE:
            return {
                ...state,
                searchResults: action.payload
            };
        default:
            return state;
    }
};

export default searchReducer;
