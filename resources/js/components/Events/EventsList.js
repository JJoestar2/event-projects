import React from 'react';
import EventsListItem from './EvenstListItem';


function EventsList({events = []}) {
    const items = events.map((event) => {
        return (
                <EventsListItem event={event} key={event.id} />
            );
        });
        return (
            <div className="d-flex flex-wrap justify-content-between">
                {items}
            </div>
        );
}
export default EventsList;
