import React from 'react';
import './FilterSearch.scss';

function FilterSearch({ location, handleGetWeather, id }) {
  return (
    <div className='filter-item' onClick={() => handleGetWeather(id)}>
      <span className='filter-location'>{location}</span>
      <span class='material-icons filter-icon'>navigate_next</span>
    </div>
  );
}

export default FilterSearch;
