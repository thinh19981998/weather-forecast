import React from 'react';
import './CurrentWeather.scss';
import { formatDate, convertToFarenheight } from '../../../Utils/index';

function CurrentWeather(props) {
  let data = {};
  if (props.data) {
    data = props.data;
  }

  let temp = Math.floor(data.the_temp);
  let scale = '°C';
  if (props.tempScale === 'farenheit') {
    temp = convertToFarenheight(Math.floor(data.the_temp));
    scale = '°F';
  }

  return (
    <>
      <div className='navigation'>
        <button className='openSearch-btn' onClick={() => props.open()}>
          Search for places
        </button>
        <div className='current-location' onClick={() => props.request()}>
          <span className='material-icons current-location__icon'>
            my_location_outlined
          </span>
        </div>
      </div>
      <div className='current-weather'>
        <div className='current-weather__img-box'>
          <img
            className='current-weather__img'
            src={`https://www.metaweather.com/static/img/weather/png/${data.weather_state_abbr}.png`}
            alt='current weather'
          />
        </div>
        <div className='current-weather__temperature'>
          <span>{temp}</span>
          <span className='symbol'>{scale}</span>
        </div>
        <div className='current-weather__state'>
          <span>{data.weather_state_name}</span>
        </div>
        <div className='current-weather__info'>
          <p className='current-weather__date'>
            Today • <span>{formatDate(data.applicable_date)}</span>
          </p>
          <p className='current-weather__location'>
            <span className='material-icons'>location_on</span> {props.location}
          </p>
        </div>
      </div>
    </>
  );
}

export default CurrentWeather;
