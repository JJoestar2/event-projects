import React from 'react';
import DropdownMenu from "./Dropdown";

import './filter.css';

const FilterDropdown = (props) => {
    return (
        <div className="event-filters">
            <DropdownMenu {...props} />
        </div>
    );
}

export default FilterDropdown;
