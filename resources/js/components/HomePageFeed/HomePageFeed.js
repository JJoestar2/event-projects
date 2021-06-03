import React, { Suspense, lazy }  from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

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
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <Sidebar>
                                <div className="nav flex-column nav-pills" aria-orientation="vertical">
                                    <Link to="/home">My events</Link>
                                    <Link to="/events/membered">Membered events</Link>
                                    <Link to="/events/schedule">Calendar</Link>
                                </div>
                            </Sidebar>
                        </div>
                        <div className="col-10">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <SearchBox />
                            </div>
                            <div className="tab-content">
                                <Suspense fallback={<Spinner />}>
                                    <Switch>
                                        <Route path="/home" exact>
                                            <UserEventsContainer id={id} />
                                        </Route>
                                        <Route path="/events/membered" exact>
                                            <MemberedEventsContainer id={id} />
                                        </Route>
                                        <Route path="/events/schedule" exact >
                                            <SchedulerContainer id={id} />
                                        </Route>
                                    </Switch>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
};

export default HomePageFeed;
