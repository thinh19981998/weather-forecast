import React from 'react';
import DayForecast from './DayForecast/DayForecast';
import './Main.scss';
import { formatDate } from '../../Utils/index';
import TempScale from './TempScale/TempScale';
import Highlights from './Highlights/Highlights';

function Main({ data, getScale, tempScale, highlight }) {
  let weekly = [];
  if (data) {
    weekly = data.slice(1);
  }

  return (
    <div className='right-box'>
      <TempScale getScale={getScale} />
      <div className='foreCast5'>
        {weekly.map((item, index) => (
          <DayForecast
            key={item.id}
            id={item.id}
            weather={item.weather_state_abbr}
            day={index === 0 ? 'Tomorrow' : formatDate(item.applicable_date)}
            max={item.max_temp}
            min={item.min_temp}
            tempScale={tempScale}
          />
        ))}
      </div>
      <Highlights highlight={highlight} />
    </div>
  );
}

export default Main;
