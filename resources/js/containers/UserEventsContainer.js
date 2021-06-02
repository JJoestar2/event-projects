import React, {Component} from 'react';
import { connect } from "react-redux";

import {getCreatedEventsByUser} from "../components/Events/state/eventActions";
import EventsList from "../components/Events";

class UserEventsContainer extends Component {
    componentDidMount() {
        let id = this.props.id;
        this.props.getEvents(id);
    }

    render() {
        return (
            <EventsList events={this.props.events.data} userId={this.props.id} />
        );
    }
}

const mapStateToProps = state => {
    return { events: state.events.createdEvents};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: (id) => dispatch(getCreatedEventsByUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEventsContainer);
