import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../../styles/articles_list/pagination.css'; 


const Pagination = ({ itemsPerPage, data, getCurrentItems }) => {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      getCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data, getCurrentItems, pageCount]);


    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };

    return (
        <ReactPaginate
          containerClassName="pagination-container"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          disabledClassName="hide-pagination"
          renderOnZeroPageCount={null}
          activeLinkClassName="active"
        />
    );
  }

  export default Pagination; 