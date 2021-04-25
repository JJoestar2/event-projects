import { GET_ALL_EVENTS } from './eventTypes';
import {getAllEvents} from "../../services";

export const getEvents = () => {
    return dispatch => {
        dispatch(grabAllEvents(getAllEvents()));
    };
};

const grabAllEvents = data => ({
    type: GET_ALL_EVENTS,
    payload: {
        data
    }
});
