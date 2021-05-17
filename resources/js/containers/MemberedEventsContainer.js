import React, {Component} from 'react';
import { connect } from "react-redux";
import EventsList from "../components/Events";
import {getMemberedEvents} from "../components/Events/state/eventActions";

class MemberedEventsContainer extends Component {

    componentDidMount() {
        let id = this.props.id;
        this.props.getEvents(id);
    }

    render() {
        return (
            <EventsList events={this.props.events.data} />
        );
    }
}

const mapStateToProps = state => {
    return { events: state.events.memberedEvents};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: (id) => dispatch(getMemberedEvents(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberedEventsContainer);
