import React, {Component} from 'react';
import { connect } from "react-redux";

import {getEvents} from "../components/Events/state/eventActions";
import EventsList from "../components/Events";

class EventListContainer extends Component {
    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        return (
            <EventsList events={this.props.events.data} />
        );
    }

}

const mapStateToProps = state => {
    return { events: state.events.eventsList};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: () => dispatch(getEvents())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);
