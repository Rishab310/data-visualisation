import React from 'react';
import "./Pagination.css";
const Pagination = ({ currentPage, noOfPages, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= noOfPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul style={{marginBottom:"100px"}}className='pagination justify-content-center mt-4'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <div onClick={() => paginate(number)} className={(number===currentPage)?'active-page page-link':'page-link'}>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;