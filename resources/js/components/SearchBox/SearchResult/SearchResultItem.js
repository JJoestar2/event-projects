import React from "react";

function SearchResultItem(props) {
    return (
        <li className="search-result-list-item">
            <a href={"/event/" + props.item.id}> {props.item.title} </a>
        </li>
    );
}

export default SearchResultItem;
