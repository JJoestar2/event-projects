import React, {Component, lazy, Suspense} from 'react';
import { connect } from "react-redux";

import {getCreatedEventsByUser} from "../components/Events/state/eventActions";
import Spinner from "../components/Spinner";
const EventsList = lazy(() => import('../components/Events'));
const ProfilePaginator= lazy(() => import('../components/Paginator/ProfilePaginator'));

class UserEventsContainer extends Component {

    UNSAFE_componentWillMount() {
        let id = this.props.id;
        this.props.getEvents(1, id);
    }

    render() {
        const {data} = this.props.events;
        return (
            <Suspense fallback={ <Spinner /> } >
                <div>
                    <EventsList events={data} userId={this.props.id} />
                    <div className="mt-3">
                        <ProfilePaginator meta={this.props.events.meta} id={this.props.id} getData={this.props.getEvents} />
                    </div>
                </div>
            </Suspense>
        );
    }
}

const mapStateToProps = state => {
    return { events: state.events.createdEvents};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: (pageNumber, id) => dispatch(getCreatedEventsByUser(pageNumber, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEventsContainer);
