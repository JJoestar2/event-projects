import React from 'react';
import Pagination from "react-js-pagination";

const Paginator = ({meta = [], filters=[], getData}) => {
    return (
        <Pagination
            activePage={meta.current_page}
            totalItemsCount={meta.total}
            itemsCountPerPage={meta.per_page}
            onChange={(pageNumber) => getData(pageNumber, filters)}
            itemClass="page-item"
            linkClass="page-link"
            firstPageText="First"
            lastPageText="Last"
        />
    );
}

export default Paginator;
