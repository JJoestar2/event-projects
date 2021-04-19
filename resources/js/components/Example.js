import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import EventsList from './EventsList';

class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div>
                            <EventsList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
