import React, { useState, useMemo } from 'react';
import '../styles/ShowNews.css'
import Pagination from './Pagination';

const PageSize = 10;

function ShowNews({ article, sortedData, filterData }) {

  // *** pagination attempt ***
  // const [currentPage, setCurrentPage] = useState(1);

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   if (sortedData) sortedData.slice(firstPageIndex, lastPageIndex);
  //   return filterData.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  return (
    // *** pagination attempt ***
    // <>
    //   {filterData.length > 0 ?
    //     <div className='article'>
    //       {currentTableData.map(item => {
    //         console.log('item', item)
    //         return (
    //           <>
    //             <a href={item.url} target='_blank' rel="noreferrer" className='links'><h1>{item.title}</h1></a><div className='article-text'>
    //               <p>{item.description}</p>
    //               <p>{item.author}</p>
    //               <p>{item.date}</p>
    //             </div><div className='article-image'>
    //               <img src={item.image} alt=''></img>
    //             </div>
    //           </>
    //         );
    //       })}
    //     </div> : 'There are no news under this category'}
    //   <Pagination
    //     className="pagination-bar"
    //     currentPage={currentPage}
    //     totalCount={filterData.length}
    //     pageSize={PageSize}
    //     onPageChange={page => setCurrentPage(page)}
    //   />
    // </>

    <div className='article'>
        <a href={article.url} target='_blank' rel="noreferrer" className='links'>
          <h1>{article.title}</h1>
        </a>
      <div className='article-text'>
          
          <p>{article.description}</p>
          <p>{article.date}</p>
          <p id='author'>{article.author}</p>
      </div>
    
      <img src={article.image} alt=''></img>
    </div>
  )
}

export default ShowNews
