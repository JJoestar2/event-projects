import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import EventsList from './Events';
import SearchBox from "./SearchBox";

class MainPageFeed extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <SearchBox />
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
