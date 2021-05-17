import {getSearchResult} from "./searchActionCreators";
import {searchEventByTitle} from "../../../services";

export const searchEvent = (title) => {
    if(title) {
        let result = searchEventByTitle(title);
        return dispatch => {
            result.then((data) => {
                dispatch(getSearchResult(data.data))
            });
        };
    } else {
        return dispatch => {
            dispatch(getSearchResult([]))
        };
    }
};
