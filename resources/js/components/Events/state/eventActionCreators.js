import {
    DEFAULT_EVENT_LIST,
    FILTERED_EVENTS,
    GET_ALL_EVENTS,
    GET_CREATED_USER_EVENTS, GET_MEMBERED_USER_EVENTS,
    REMOVE_ALL_FILTERS, REMOVE_FILTER,
    SET_FILTER, SORT_EVENTS
} from "./eventTypes";

const grabAllEvents = data => ({
    type: GET_ALL_EVENTS,
    payload: {
        data
    }
});

const grabAllCreatedEvents = data => ({
    type: GET_CREATED_USER_EVENTS,
    payload: {
        data
    }
});

const grabAllMemberedEvents = data => ({
    type: GET_MEMBERED_USER_EVENTS,
    payload: {
        data
    }
});

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

const sortEventsAction = (filter, events) => ({
    type: SORT_EVENTS,
    payload: {
        filter: filter,
        items: {
            data: events
        }
    }
});

export {
    grabAllEvents,
    grabAllCreatedEvents,
    grabAllMemberedEvents,
    setFilter,
    removeFilter,
    clearFilters,
    grabFilteredEvents,
    eventsWithoutFilters,
    sortEventsAction,
};
