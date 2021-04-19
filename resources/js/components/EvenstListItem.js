import React from 'react';
import './event-card.css';

function EventsListItem(props) {
        return (

                        <a href="#">
                            <div className="cards transition">
                                <h2 className="transition">{props.event.title}<br /><small>{props.event.date_start}</small>
                                </h2>
                            </div>
                        </a>
        );
}
export default EventsListItem;
