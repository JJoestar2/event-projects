import React, {Component, lazy, Suspense} from 'react';
import { connect } from "react-redux";

import {getEvents} from "../components/Events/state/eventActions";
import Spinner from "../components/Spinner";

const EventsList = lazy(() => import('../components/Events'));
const Paginator = lazy(() => import('../components/Paginator/Paginator'));

class EventListContainer extends Component {
    UNSAFE_componentWillMount() {
        this.props.getEvents(1, []);
    }

    componentDidUpdate(prevProps) {
        if(this.props.filters !== prevProps.filters) {
            this.props.getEvents(1, this.props.filters);
        }
    }

    render() {
        const {data} = this.props.events;
        return (
            <Suspense fallback={ <Spinner /> } >
                <div>
                    <EventsList events={data} />
                    <div className="mt-3">
                        <Paginator meta={this.props.events.meta} filters={this.props.filters} getData={this.props.getEvents} />
                     </div>
                </div>
            </Suspense>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.events.eventsList,
        filters: state.events.eventFilters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: (pageNumber, filters) => dispatch(getEvents(pageNumber, filters))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);
