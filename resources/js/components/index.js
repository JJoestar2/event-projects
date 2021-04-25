import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../store";

import MainPageFeed from "./MainPageFeed";

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={store}>
            <MainPageFeed />
        </Provider>, document.getElementById('root'));
}
