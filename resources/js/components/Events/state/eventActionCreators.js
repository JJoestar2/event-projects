import {
    DEFAULT_EVENT_LIST,
    GET_ALL_EVENTS,
    GET_CREATED_USER_EVENTS, GET_MEMBERED_USER_EVENTS,
    LOADING, LOADED, GET_USER_SCHEDULE,
    REMOVE_ALL_FILTERS, REMOVE_FILTER,
    SET_FILTER, SORT_EVENTS
} from "./eventTypes";

const dataLoading = () => ({
    type: LOADING
});

const dataLoaded = () => ({
   type: LOADED
});

const grabAllEvents = data => ({
    type: GET_ALL_EVENTS,
    payload: {
        events: data
    }
});

const setSchedule = data => ({
    type: GET_USER_SCHEDULE,
    payload: {
        events: data
    }
});

const grabAllCreatedEvents = data => ({
    type: GET_CREATED_USER_EVENTS,
    payload: {
        events: data
    }
});

const grabAllMemberedEvents = data => ({
    type: GET_MEMBERED_USER_EVENTS,
    payload: {
        events: data
    }
});

const clearFilters = () => ({
    type: REMOVE_ALL_FILTERS
});

const eventsWithoutFilters = data => ({
    type: DEFAULT_EVENT_LIST,
    payload: {
        events: data
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
    setSchedule,
    removeFilter,
    clearFilters,
    eventsWithoutFilters,
    sortEventsAction,
    dataLoading,
    dataLoaded,
};
