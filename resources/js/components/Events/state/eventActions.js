import {
    clearFilters, eventsWithoutFilters,
    grabAllCreatedEvents, grabAllMemberedEvents,
    grabAllEvents,
    grabFilteredEvents,
    setFilter,
    sortEventsAction
} from "./eventActionCreators";

import {
        getAllEvents, getCreatedUserEvents,
        getMemberedUserEvents, filterEvents
} from "../../../services/EventsService";

export const getEvents = () => {
    let events = getAllEvents();
    return dispatch => {
        events.then((data) => {
            dispatch(grabAllEvents(data.data))
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
