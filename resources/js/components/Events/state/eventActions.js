import {
    clearFilters, eventsWithoutFilters,
    grabAllCreatedEvents, grabAllMemberedEvents,
    grabAllEvents,
    grabFilteredEvents,
    setFilter, removeFilter,
    sortEventsAction, dataLoading, dataLoaded,
} from "./eventActionCreators";

import {
        getAllEvents, getCreatedUserEvents,
        getMemberedUserEvents, filterEvents
} from "../../../services/EventsService";


export const showLoader = () => {
    return dispatch => {
        dispatch(dataLoading());
    };
};

export const hideLoader = () => {
    return dispatch => {
        dispatch(dataLoaded());
    };
};

export const getEvents = (pageNumber, filters = []) => {
    let events = getAllEvents(pageNumber, filters);
    return dispatch => {
        events.then((data) => {
            dispatch(grabAllEvents(data))
        });
    };
};

export const addFilter = (type, value) => {
    return dispatch => {
        dispatch(setFilter(type, value));
    };
};

export const deleteFilter = (type) => {
    return dispatch => {
        dispatch(removeFilter(type));
    };
};

export const clearEventsFilters = () => {
    return dispatch => {

        dispatch(clearFilters());
        let events = getAllEvents(1, []);

        events.then((data) => {
            dispatch(eventsWithoutFilters(data))
        });
    };
};

export const getCreatedEventsByUser = (id) => {
    let events = getCreatedUserEvents(id);
    return dispatch => {
        events.then((data) => {
            dispatch(grabAllCreatedEvents(data.data))
        });
    };
};

export const getMemberedEvents = (id) => {
    let events = getMemberedUserEvents(id);
    return dispatch => {
        events.then((data) => {
            dispatch(grabAllMemberedEvents(data.data))
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

