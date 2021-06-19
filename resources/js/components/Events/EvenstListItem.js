import React, {useState} from 'react';
import './event-card.css';

function EventsListItem(props) {
        const [showMenu, setShowMenu] = useState(false);
        const activeClass = showMenu ? "setting-menu-item_active" : "";
        let photo = '';
        props.event.photos ? props.event.photos.map((item) => {
           photo = item.path
        }) : '';
        return (
            <div className="event event-shadow d-flex justify-content-between flex-column">
                {
                    props.userId && props.event.users_id === props.userId ?

                    <div className={`event-options ${activeClass}`} onClick={() => setShowMenu(!showMenu)}>
                            <span className="setting-menu setting-icon">
                                <i className="fa fa-cogs" aria-hidden="true"></i>
                            </span>
                            <a href={"/event/edit/" + props.event.id} className="setting-icon setting-menu-item">
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                            </a>
                            <a href={"/api/event/remove/" + props.event.id} className="setting-icon setting-menu-item">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </a>
                    </div> : null
                }
                <div className="event-preview">
                    {
                        photo ? <img src={`/images/events/${photo}`} alt="image" /> :
                            <img src="/images/events/img_lights.jpg" alt="image" />
                    }
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
