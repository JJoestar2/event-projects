import React, {Component} from "react";
import { connect } from "react-redux";

import './search-box.css';

import SearchResultList from './SearchResult';
import {searchEvent} from './state/searchActions';

class SearchBox extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchEvent(e.target.title.value);
    }

    render() {
        let results = this.props.results.result ? <SearchResultList results={this.props.results.result} /> : null;
        return (
            <div className="wrap">
                <div className="search">
                    <form onSubmit={(e) => this.handleSubmit(e)} className="search-form">
                        <input type="text" name="title" className="searchTerm" placeholder="What are you looking for?" />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                    {results}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { results: state.search.searchResults};
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchEvent: (title) => dispatch(searchEvent(title))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
