import React from 'react';
import FilterSearch from './FilterSearch/FilterSearch';
import './SearchBar.scss';

function SearchBar({
  close,
  search,
  handleInputChange,
  handleSearch,
  input,
  filteredSearch,
  error,
  handleGetWeather,
}) {
  const searchClass = `search ${search ? 'show' : ''}`;

  const submitHandler = (e) => {
    e.preventDefault();

    handleSearch();
  };
  return (
    <div className={searchClass}>
      <div className='search__close-btn' onClick={() => close()}>
        <span className='material-icons'>close</span>
      </div>
      <form className='search__form' onSubmit={submitHandler}>
        <div className='search__input-box'>
          <span className='material-icons search__icon'>search</span>
          <input
            type='text'
            className='search__input'
            placeholder='search location'
            onChange={handleInputChange}
            value={input}
          />
        </div>
        <button className='search__btn'>Search</button>
      </form>
      <div className='filter-box'>
        {error ? (
          <div className='error'>
            Search Not Found. Please Enter a valid city.
          </div>
        ) : (
          filteredSearch.map((item) => (
            <FilterSearch
              key={item.woeid}
              location={item.title}
              id={item.woeid}
              handleGetWeather={handleGetWeather}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default SearchBar;
