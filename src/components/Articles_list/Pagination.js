import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';
import '../../styles/articles_list/pagination.css'; 


const Pagination = ({ itemsPerPage, data, getCurrentItems }) => {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    let params = useParams(); 
  
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      getCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data, getCurrentItems, pageCount]);


    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };
  
    const hrefBuilder = (page, pageCount) => {
        if(params.categoryId && page >= 1 && page <= pageCount) {
             return `/articles/${params.categoryId}/${page}`
       }
    }

    return (
        <ReactPaginate
          containerClassName="pagination-container"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          disabledClassName="hide"
          renderOnZeroPageCount={null}
          activeLinkClassName="active"
          hrefBuilder={hrefBuilder}
          hrefAllControls
        />
    );
  }

  export default Pagination; 