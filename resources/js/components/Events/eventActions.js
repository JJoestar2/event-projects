import {GET_ALL_EVENTS, SEARCH_BY_TITLE, SORT_EVENTS} from './eventTypes';
import {getAllEvents, searchEventByTitle} from "../../services";

export const getEvents = () => {
    let events = getAllEvents();
    return dispatch => {
        events.then((data) => {
            dispatch(grabAllEvents(data.data))
        });
    };
};

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

export const sortEvents = (filter, events) => (dispatch) => {
    if(filter !== 'ALL') {
        if(filter === 'DESC') events.sort((a,b) => (a.title > b.title ? 1 : -1))
        if(filter === 'ASC')  events.sort((a,b) => (a.title < b.title ? 1 : -1))
        if(filter === 'DATE') events.sort((a,b) => (a.date_start > b.date_start ? 1 : -1))
    } else {
        events.sort((a,b) => (a.id > b.id ? 1 : -1))
    }

    return dispatch(sortEventsAction(filter, events));
};

const grabAllEvents = data => ({
    type: GET_ALL_EVENTS,
    payload: {
        data
    }
});

const getSearchResult = result => ({
   type: SEARCH_BY_TITLE,
   payload: {
       result
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
