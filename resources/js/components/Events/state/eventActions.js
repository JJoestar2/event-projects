import {GET_ALL_EVENTS, SORT_EVENTS, FILTER_EVENTS, CLEAR_FILTERS} from './eventTypes';
import {getAllEvents, filterEvents} from "../../../services/EventsService";

export const getEvents = () => {
    let events = getAllEvents();
    return dispatch => {
        events.then((data) => {
            dispatch(grabAllEvents(data.data))
        });
    };
};

export const sortEvents = (filter, events) => (dispatch) => {
    if(filter !== 'ALL') {
        if(filter === 'DESC') events.sort((a,b) => (a.title > b.title ? 1 : -1))
        if(filter === 'ASC')  events.sort((a,b) => (a.title < b.title ? 1 : -1))
        if(filter === 'DATE') events.sort((a,b) => (a.date_start < b.date_start ? 1 : -1))
    } else {
        events.sort((a,b) => (a.id > b.id ? 1 : -1))
    }

    return dispatch(sortEventsAction(filter, events));
};

export const eventsFiltering = (type, id) => {
    let events = filterEvents(type, id);
    return dispatch => {
        events.then((data) => {
            dispatch(grabFilteredEvents(data.data))
        });
    };
};

export const clearEventsFilters = () => {
    let events = getAllEvents();
    return dispatch => {
        events.then((data) => {
            dispatch(eventsWithoutFilters(data.data))
        });
    };
};

const eventsWithoutFilters = data => ({
    type: CLEAR_FILTERS,
    payload: {
        data
    }
});

const grabFilteredEvents = data => ({
    type: FILTER_EVENTS,
    payload: {
        data
    }
});

const grabAllEvents = data => ({
    type: GET_ALL_EVENTS,
    payload: {
        data
    }
});

const sortEventsAction = (filter, events) => ({
    type: SORT_EVENTS,
    payload: {
        filter: filter,
        items: {
            data: events
        }
    }
});