import React, { Suspense, lazy }  from 'react';

import SearchBox from "../SearchBox";
import Sidebar from "../Sidebar";
import Spinner from "../Spinner";

const UserEventsContainer = lazy(() => import('../../containers/UserEventsContainer'));
const MemberedEventsContainer = lazy(() => import('../../containers/MemberedEventsContainer'));
const SchedulerContainer = lazy(() => import('../../containers/SchedulerContainer'));

const HomePageFeed = (props) =>
{
        let id = JSON.parse(props.data);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <Sidebar>
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home"
                                   role="tab" aria-controls="v-pills-home" aria-selected="true">My Events</a>
                                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile"
                                   role="tab" aria-controls="v-pills-profile" aria-selected="false">Membered Events</a>
                                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages"
                                   role="tab" aria-controls="v-pills-messages" aria-selected="false">Calendar</a>
                            </div>
                        </Sidebar>
                    </div>
                    <div className="col-10">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <SearchBox />
                        </div>
                        <div className="tab-content" id="v-pills-tabContent">
                            <Suspense fallback={ <Spinner /> } >
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                     aria-labelledby="v-pills-home-tab">
                                    <UserEventsContainer id={id} />
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab">
                                    <MemberedEventsContainer id={id} />
                                </div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                     aria-labelledby="v-pills-messages-tab">
                                    <SchedulerContainer id={id} />
                                </div>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default HomePageFeed;
