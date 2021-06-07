import React, {useState} from 'react';

const FilterDropdownItem = (props) => {
    const[selected, setSelected] = useState(false);

    const active = selected ? 'filter-active' : '';
    return (
        <div className={`filters-item ${active}`}>
            <span onClick = {() => { props.addFilter(props.filterKey, props.id); setSelected(!selected) } } >
                {props.children}
            </span>
            <span className="filters-block-list-item-cancel mr-3" onClick = { () => { props.removeFilter(props.filterKey); setSelected(!selected) } }>
                <i className="fa fa-times-circle" aria-hidden="true"></i>
            </span>
        </div>
    );

};

export default FilterDropdownItem;
