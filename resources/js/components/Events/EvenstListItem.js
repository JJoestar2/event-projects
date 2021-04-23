import React from 'react';
import './event-card.css';

function EventsListItem(props) {
        return (
            <div className="card card-shadow">
                <div className="card-preview">
                    <img src="#" alt="image" />
                </div>
                <div className="card-body">
                    <div className="card-info">
                        <i className="fa fa-calendar" aria-hidden="true"><span className="card-date">{props.event.date_start}</span></i>
                        <i className="fa fa-map-marker" aria-hidden="true"><span className="card-location">{props.event.location}</span></i>
                    </div>
                    <h2 className="card-title">{props.event.title}</h2>
                </div>
                <a href="#" className="btn btn-primary btn-more">Read More</a>
            </div>
        );
}
export default EventsListItem;
