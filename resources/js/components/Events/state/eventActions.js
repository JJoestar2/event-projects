import {GET_ALL_EVENTS, SORT_EVENTS, FILTERED_EVENTS, DEFAULT_EVENT_LIST, REMOVE_FILTER, SET_FILTER, REMOVE_ALL_FILTERS} from './eventTypes';
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

export const eventsFiltering = (type, value) => {
    return (dispatch, getState) => {
        dispatch(setFilter(type, value));

        const state = getState();
        const {eventFilters} = state.events;
        let events = filterEvents(eventFilters);

        events.then((data) => {
            dispatch(grabFilteredEvents(data.data))
        });
    };
};

export const clearEventsFilters = () => {
    let events = getAllEvents();
    return dispatch => {

        dispatch(clearFilters());

        events.then((data) => {
            dispatch(eventsWithoutFilters(data.data))
        });
    };
};

const clearFilters = () => ({
    type: REMOVE_ALL_FILTERS
});

const eventsWithoutFilters = data => ({
    type: DEFAULT_EVENT_LIST,
    payload: {
        data
    }
});

const grabFilteredEvents = data => ({
    type: FILTERED_EVENTS,
    payload: {
        data
    }
});

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
