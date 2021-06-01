import React, {Component, lazy, Suspense} from 'react';
import { connect } from "react-redux";

import {getEvents} from "../components/Events/state/eventActions";
import Spinner from "../components/Spinner";

const EventsList = lazy(() => import('../components/Events'));
const Paginator = lazy(() => import('../components/Paginator'));

class EventListContainer extends Component {
    UNSAFE_componentWillMount() {
        this.props.getEvents(1);
    }

    render() {
        const {data} = this.props.events;
        return (
            <Suspense fallback={ <Spinner /> } >
                <div>
                    <EventsList events={data} />
                    <div className="mt-3">
                        <Paginator meta={this.props.events.meta} getData={this.props.getEvents} />
                     </div>
                </div>
            </Suspense>
        );
    }

}

const mapStateToProps = state => {
    return { events: state.events.eventsList};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: (pageNumber) => dispatch(getEvents(pageNumber))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);
