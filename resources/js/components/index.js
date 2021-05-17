import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../store";

import MainPageFeed from "./MainPageFeed";
import HomePageFeed from "./HomePageFeed";

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={store}>
            <MainPageFeed />
        </Provider>, document.getElementById('root'));
}

if (document.getElementById('home-page')) {
    let data = document.getElementById('home-page').getAttribute('data');
    ReactDOM.render(
        <Provider store={store}>
            <HomePageFeed data={data} />
        </Provider>, document.getElementById('home-page'));
}
