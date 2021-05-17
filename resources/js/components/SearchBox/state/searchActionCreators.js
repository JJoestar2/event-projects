import {SEARCH_BY_TITLE} from "./searchTypes";

const getSearchResult = result => ({
    type: SEARCH_BY_TITLE,
    payload: {
        result
    }
});

export {
    getSearchResult,
};
