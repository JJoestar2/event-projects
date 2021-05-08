import React, {Component} from "react";
import { connect } from "react-redux";
import './sidebar.css';

import FilterDropdown from "../FilterDropdown";
import {getFilterTypes} from "./state/filterActions";
import {eventsFiltering, clearEventsFilters} from "../Events/state/eventActions";

class Sidebar extends Component {

    componentDidMount() {
        this.props.grabFilters();
    }

        render() {
          return (
              <div className="filters h-100">
                  <span className="filters-heading">Filters</span>
                  <div className="filters-block">
                      <ul className="filters-block-list">
                          <li className="filters-block-list-item">
                              <FilterDropdown title="Categories"
                                              data={this.props.categories.data}
                                              func={this.props.makeFilters}
                                              filterKey="category"
                              />
                          </li>
                          <li className="filters-block-list-item">
                              <FilterDropdown title="Types"
                                              data={this.props.types.data}
                                              func={this.props.makeFilters}
                                              filterKey="type"
                              />
                          </li>
                          <li className="filters-block-list-item bg-white pt-2 pb-2 pl-3"
                          onClick={ () => this.props.clearFilters() }> Clear filters</li>
                      </ul>
                  </div>
              </div>
          );
      }
};

const mapStateToProps = state => {
    return {
        categories: state.filter.eventCategories,
        types: state.filter.eventTypes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        grabFilters: () => dispatch(getFilterTypes()),
        makeFilters: (type, id) => dispatch(eventsFiltering(type, id)),
        clearFilters: () => dispatch(clearEventsFilters()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
