import {GET_ALL_EVENTS, SEARCH_BY_TITLE} from './eventTypes';
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
