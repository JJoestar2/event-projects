import React from "react";

const FilterListItem = (props) => {
    return (
        <li {...props}>
            {props.children}
        </li>
    );
}

export default FilterListItem;
