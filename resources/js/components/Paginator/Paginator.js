import React from 'react';
import Pagination from "react-js-pagination";

const Paginator = ({meta = [], getData}) => {
    return (
        <Pagination
            activePage={meta.current_page}
            totalItemsCount={meta.total}
            itemsCountPerPage={meta.per_page}
            onChange={(pageNumber) => getData(pageNumber)}
            itemClass="page-item"
            linkClass="page-link"
            firstPageText="First"
            lastPageText="Last"
        />
    );
}

export default Paginator;
