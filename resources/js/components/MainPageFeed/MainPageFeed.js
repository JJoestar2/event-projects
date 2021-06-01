import React from 'react';

import SearchBox from "../SearchBox";
import SortBox from "../SortBox";
import FiltersList from "../Filters";
import Sidebar from "../Sidebar";
import {EventListContainer} from '../../containers';

const MainPageFeed = (props) => {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-3">
                        <Sidebar>
                            <FiltersList />
                        </Sidebar>
                    </div>
                    <div className="col-lg-9">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <SearchBox />
                            <SortBox />
                        </div>
                        <EventListContainer />
                    </div>
                </div>
            </div>
        );
    }

export default MainPageFeed;
