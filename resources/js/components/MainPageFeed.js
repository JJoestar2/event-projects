import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import EventsList from './Events';
import SearchBox from "./SearchBox";
import SortBox from "./SortBox";

class MainPageFeed extends Component {
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
                        <EventsList />
                    </div>
                </div>
            </div>
        );
    }
}
export default MainPageFeed;

if (document.getElementById('root')) {
    ReactDOM.render(<MainPageFeed />, document.getElementById('root'));
}
