import React from "react";

function SortBox(props) {
    return (
        <div className="form-group mb-0">
            <select className="form-control">
                <option value="ALL">All</option>
                <option value="DESC">Desc</option>
                <option value="ASC">Asc</option>
                <option value="CITY">City</option>
            </select>
        </div>
    );
}

export default SortBox;
