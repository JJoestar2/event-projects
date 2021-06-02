import React from 'react';
import './event-card.css';

function EventsListItem(props) {
        return (
            <div className="event event-shadow d-flex justify-content-between flex-column">
                {
                    props.userId && props.event.users_id === props.userId ?

                    <div className="event-options">
                        <div className="setting-icon">
                            <i className="fa fa-cogs"
                               aria-hidden="true" data-toggle="collapse"
                               data-target="#collapseExample" aria-expanded="false"
                               aria-controls="collapseExample"> </i>
                        </div>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body participants-block"
                                 data-toggle="collapse" data-target="#collapseExample"
                                 aria-expanded="false" aria-controls="collapseExample">

                                <a href={"/event/edit/" + props.event.id} className="btn btn-primary">
                                    Update
                                </a>
                                <a href={"/api/event/remove/" + props.event.id} className="btn btn-primary">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </div> : null
                }
                <div className="event-preview">
                    <img src="/img_lights.jpg" alt="image" />
                </div>
                <div className="card-body">
                    <div className="event-info">
                        <i className="fa fa-calendar" aria-hidden="true"><span className="event-date">{props.event.date_start}</span></i>
                        <i className="fa fa-map-marker" aria-hidden="true"><span className="event-location">{props.event.location}</span></i>
                    </div>
                    <h2 className="event-title">{props.event.title}</h2>
                </div>
                <a href={"/event/" + props.event.id} className="btn btn-primary btn-more">Read More</a>
            </div>
        );
}
export default EventsListItem;
