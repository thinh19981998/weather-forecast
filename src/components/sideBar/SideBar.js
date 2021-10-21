import React from 'react';
import './SideBar.scss';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import SearchBar from './SearchBar/SearchBar';

function SideBar({
  open,
  close,
  search,
  data,
  location,
  handleInputChange,
  handleSearch,
  input,
  filteredSearch,
  error,
  handleGetWeather,
  tempScale,
  request,
}) {
  return (
    <div className='side-bar'>
      <CurrentWeather
        open={open}
        search={search}
        data={data}
        location={location}
        tempScale={tempScale}
        request={request}
      />
      <SearchBar
        search={search}
        close={close}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
        input={input}
        filteredSearch={filteredSearch}
        error={error}
        handleGetWeather={handleGetWeather}
      />
    </div>
  );
}

export default SideBar;
