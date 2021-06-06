import React, {Component} from 'react';
import { connect } from "react-redux";

import UserScheduler from '../components/UserScheduler';
import {getEventSchedule} from "../components/Events/state/eventActions";


class SchedulerContainer extends Component {

    componentDidMount() {
        let id = this.props.id;
        this.props.getEvents(id);
    }

    setCalendarData = (events = []) => {
        let data = [];

        events.map((item) => {
            data.push({
                id: item.id,
                title: item.title,
                startDate: item.date_start,
                endDate: item.date_end
            });
        });

        return data;
    }

    render() {
        let data = this.setCalendarData(this.props.events);
        return (
            <UserScheduler data={data} />
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.events.schedule
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: (id) => dispatch(getEventSchedule(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulerContainer);
