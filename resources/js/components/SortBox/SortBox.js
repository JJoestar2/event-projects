import React from "react";
import {connect} from "react-redux";
import {sortEvents} from "../Events/state/eventActions";

function SortBox(props) {
    return (
        <div className="form-group mb-0">
            <select className="form-control" value={props.filter}
            onChange={(e) => props.sort(e.target.value, props.events.data)}>
                <option value="ALL">All</option>
                <option value="DESC">Desc</option>
                <option value="ASC">Asc</option>
                <option value="DATE">Date</option>
            </select>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        filter: state.events.sortFilter,
        events: state.events.eventsList
    };
};

const mapDispatchToProps = dispatch => {
  return {
      sort: (filter, events) => dispatch(sortEvents(filter, events))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortBox);
