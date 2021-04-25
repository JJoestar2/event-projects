import React from 'react';
import './event-card.css';

function EventsListItem(props) {
        return (
            <div className="event event-shadow">
                <div className="event-preview">
                    <img src="#" alt="image" />
                </div>
                <div className="card-body">
                    <div className="event-info">
                        <i className="fa fa-calendar" aria-hidden="true"><span className="event-date">{props.event.date_start}</span></i>
                        <i className="fa fa-map-marker" aria-hidden="true"><span className="event-location">{props.event.location}</span></i>
                    </div>
                    <h2 className="event-title">{props.event.title}</h2>
                </div>
                <a href="#" className="btn btn-primary btn-more">Read More</a>
            </div>
        );
}
export default EventsListItem;
