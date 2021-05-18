import {GET_ALL_CATEGORIES, GET_ALL_TYPES} from "./filterTypes";

import {getAllTypes} from "../../../services/TypeService";
import {getAllCategories} from "../../../services/CategoryService";

export const getFilterTypes = () => {
    let categories = getAllCategories();
    let types = getAllTypes();

    return dispatch => {
        categories.then((data) => {
           dispatch(grabAllCategories(data.data))
        });

        types.then((data) => {
            dispatch(grabAllTypes(data.data))
        });
    };
};

const grabAllCategories = data => ({
    type: GET_ALL_CATEGORIES,
    payload: {
        data
    }
});

const grabAllTypes = data => ({
    type: GET_ALL_TYPES,
    payload: {
        data
    }
});

