import React from "react";
import SearchResultItem from "./SearchResultItem";

function SearchResultList(props) {
    let items = props.results.map((item) => {
       return (
           <SearchResultItem key={item.id} item={item} />
       );
    });
    return (
        <div className="search-result">
            <ul className="search-result-list">
                {items}
            </ul>
        </div>
    );
}

export default SearchResultList;
