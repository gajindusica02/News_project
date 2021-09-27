import React, { useState, useEffect, useMemo } from 'react';
import ShowNews from './ShowNews';
import Nav from './Nav.js';
import '../styles/NewsContainer.css';

function NewsContainer() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [path, setPath] = useState('general');
  const [filterData, setFilterData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const limit = 100;

  const ACSSES_KEY = "4a92b043a2461e3e028ddcd95981b788";
  const source = 'en' && 'sports,business'

  const getNews = async () => {
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${ACSSES_KEY}&keywords=${query}&sources=${source}&limit=${limit}`);
    const data = await response.json();
    
    setArticles([...articles, ...data.data]);
    console.log('articles', articles);
    setIsFetching(false)
    setFilterData(data.data);
  };

  const PageSize = 10;
  
  useEffect(() => {
    console.log('======', filterData)
    getNews();
  }, [query]);
  

  // *** INFINITE SCROLL ***

  // function handleScroll() {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //     document.documentElement.offsetHeight
  //   ) {
  //     console.log('here')
  //     return
  //   };
  //   setIsFetching(true);
  // }

  // function getMoreArticles() {
  //   setTimeout(() => {
  //     setPage(page++);
  //     getNews();
  //     // setIsFetching(false);
  //   }, 500);
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   if (!isFetching) return;
  //   getMoreArticles();
  // }, [isFetching]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = e => {

    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  const sendDataToParent = (index) => {
    setPath(index);
  };

  useEffect(() => {
    function checkPath(articles) {
      if (articles && path && articles.category === path) {
        return articles.category
      }
    }
    setFilterData(articles.filter(checkPath));
  }, [path]);

  function sortArray() {
    filterData.sort(function (a, b) {
      let keyA = new Date(a.published_at),
        keyB = new Date(b.published_at);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    setSortedData(filterData);
    return filterData;
  };

  function sortArrayAsc() {
    console.log('here')
    filterData.sort(function (a, b) {
      let keyA = new Date(a.published_at),
        keyB = new Date(b.published_at);
      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
      return 0;
    });
    setSortedData(filterData);
    return filterData;
  };

  useEffect(() => {
    setFilterData(sortedData);
  }, [sortedData]);

  return (
    <div>
      <Nav sendDataToParent={sendDataToParent} />
      <div className='form'>
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}>
          </input>
          <button className="search-button" type="submit"><i className="fas fa-search"></i></button>
        </form>
        <div className='sorting'>
          <button className='sortingBtn' type='button' onClick={sortArray} >
            The newest
          </button>
          <button className='sortingBtn' type='button' onClick={sortArrayAsc} >
            The oldest
          </button>
        </div>
      </div>
      <div className='articles'>
        {
          filterData.map((article, index) => (
            <ShowNews
              key={index}
              sortedData={sortedData}
              article={article}
              filterData={filterData}
            />
          ))
        }
      </div>
      {isFetching && (
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      )}
    </div>
  )
}

export default NewsContainer
