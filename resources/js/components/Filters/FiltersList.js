import React, {Component} from "react";
import { connect } from "react-redux";
import './filters-list.css';

import FilterDropdown from "../FilterDropdown";
import FilterListItem from "./FilterListItem";

import {getFilterTypes} from "./state/filterActions";
import {eventsFiltering, clearEventsFilters} from "../Events/state/eventActions";

class FiltersList extends Component {

    componentDidMount() {
        this.props.grabFilters();
    }

        render()
        {
              return (
                  <div className="filters">
                      <span className="filters-heading">Filters</span>
                      <div className="filters-block">
                          <ul className="filters-block-list">
                              <FilterListItem className="filters-block-list-item">
                                  <FilterDropdown title="Categories"
                                                  data={this.props.categories.data}
                                                  add={this.props.setFilter}
                                                  filterKey="category"
                                  />
                              </FilterListItem>
                              <FilterListItem className="filters-block-list-item">
                                  <FilterDropdown title="Types"
                                                  data={this.props.types.data}
                                                  add={this.props.setFilter}
                                                  filterKey="type"
                                  />
                              </FilterListItem>
                              <FilterListItem className="filters-block-list-item bg-white pt-2 pb-2 pl-3"
                              onClick={ () => this.props.clearFilters() }> Clear filters</FilterListItem>
                          </ul>
                      </div>
                  </div>
              );
        }
};

const mapStateToProps = state => {
    return {
        categories: state.filter.eventCategories,
        types: state.filter.eventTypes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        grabFilters: () => dispatch(getFilterTypes()),
        setFilter: (type, value) => dispatch(eventsFiltering(type, value)),
        clearFilters: () => dispatch(clearEventsFilters()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersList);
