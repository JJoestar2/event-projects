import React, { Component } from 'react';
import { connect } from "react-redux";

import EventsList from './Events';
import SearchBox from "./SearchBox";
import SortBox from "./SortBox";
import {getEvents} from "./Events/eventActions";

class MainPageFeed extends Component {
    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-3">
                        <div className="filters">
                            Filters
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <SearchBox />
                            <SortBox />
                        </div>
                        <EventsList events={this.props.events.data} />
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPageFeed);
