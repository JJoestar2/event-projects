import React from 'react';
import EventsListItem from './EvenstListItem';


function EventsList({events = []}) {
    const items = events.map((event) => {
        return (
                <li key={event.id} className="event-list-item"><EventsListItem event={event} /></li>
            );
        });
        return (
            <ul className="d-flex flex-wrap justify-content-between events-row">
                {items}
            </ul>
        );
}
export default EventsList;
