import React from 'react';
import './DayForecast.scss';
import { convertToFarenheight } from '../../../Utils/index';

function DayForecast({ weather, max, min, day, tempScale }) {
  let maxTemp = Math.floor(max);
  let minTemp = Math.floor(min);
  if (tempScale === 'farenheit') {
    maxTemp = convertToFarenheight(max);
    minTemp = convertToFarenheight(min);
  }

  return (
    <div className='forecast-box'>
      <span className='forecast-day'>{day}</span>
      <div className='forecast-imgBox'>
        <img
          src={`https://www.metaweather.com/static/img/weather/png/64/${weather}.png`}
          alt=''
        />
      </div>
      <div className='forecast-temparature'>
        <span className='forecast-temparature__max'>
          {maxTemp}
          {tempScale === 'farenheit' ? '°F' : '°C'}
        </span>
        <span className='forecast-temparature__min'>
          {minTemp}
          {tempScale === 'farenheit' ? '°F' : '°C'}
        </span>
      </div>
    </div>
  );
}

export default DayForecast;
