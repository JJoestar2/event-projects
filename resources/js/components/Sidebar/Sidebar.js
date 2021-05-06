import React, {Component} from "react";
import { connect } from "react-redux";

import FilterDropdown from "../FilterDropdown";
import {getFilterTypes} from "./state/filterActions";

class Sidebar extends Component {

    componentDidMount() {
        this.props.grabFilters();
    }

        render() {
          return (
              <div className="filters h-100">
                  <span>Filters</span>
                  <FilterDropdown title="Categories" data={this.props.categories.data} />
                  <p className="mt-4"></p>
                  <FilterDropdown title="Types" data={this.props.types.data}/>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
