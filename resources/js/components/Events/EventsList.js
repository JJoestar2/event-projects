import React, { Component } from 'react';
import EventsListItem from './EvenstListItem';

class EventsList extends Component {
    state = {
      events: []
    };

    componentDidMount() {
        fetch('/events/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((data)=> {
                this.setState({
                    events: data.data
                });
            });
    }

    render() {
        const items = this.state.events.map((event) => {
            return (
                    <EventsListItem event={event} key={event.id} />
                );
        });
        return (
            <div className="d-flex justify-content-around">
                {items}
            </div>
        );
    }
}
export default EventsList;
