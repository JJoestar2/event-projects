import {GET_ALL_CATEGORIES, GET_ALL_TYPES, SET_FILTER, REMOVE_FILTER, REMOVE_ALL_FILTERS} from "./filterTypes";

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

export const addFilter = (type, value) => (dispatch) => {
    return dispatch(setFilter(type, value));
};

export const deleteFilter = (type) => (dispatch) => {
    return dispatch(removeFilter(type));
};

export const removeAllFilters = (dispatch) => {
    return dispatch(clearFilters());
};

const setFilter = (type, value) => ({
    type: SET_FILTER,
    payload: {
        type: type,
        value: value
    }
});

const removeFilter = (type) => ({
    type: REMOVE_FILTER,
    payload: {
        type: type
    }
});

const clearFilters = () => ({
    type: REMOVE_ALL_FILTERS
});

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

