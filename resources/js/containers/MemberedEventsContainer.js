import React, {Component, lazy, Suspense} from 'react';
import { connect } from "react-redux";
import {getMemberedEvents} from "../components/Events/state/eventActions";

const EventsList = lazy(() => import('../components/Events'));
const ProfilePaginator = lazy(() => import('../components/Paginator/ProfilePaginator'));
import Spinner from "../components/Spinner";

class MemberedEventsContainer extends Component {

    UNSAFE_componentWillMount() {
        let id = this.props.id;
        this.props.getEvents(1, id);
    }

    render() {
        const {data} = this.props.events;
        return (
            <Suspense fallback={ <Spinner /> } >
                <div>
                    <EventsList events={data} />
                    <div className="mt-3">
                        <ProfilePaginator meta={this.props.events.meta} id={this.props.id} getData={this.props.getEvents} />
                    </div>
                </div>
            </Suspense>
        );
    }
}

const mapStateToProps = state => {
    return { events: state.events.memberedEvents};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: (pageNumber, id) => dispatch(getMemberedEvents(pageNumber, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberedEventsContainer);
