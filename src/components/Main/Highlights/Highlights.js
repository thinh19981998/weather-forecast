import React from 'react';
import './Highlights.scss';
import HighlightCard from './HighlightCard/HighlightCard';

function Highlights({ highlight }) {
  let dataHighlight = {};
  if (highlight) {
    dataHighlight = highlight;
  }
  return (
    <div className='highlight'>
      <h2 className='highlight__heading'>Today's highlight</h2>
      <div className='highlight__cards'>
        <HighlightCard
          title='Wind Status'
          value={Math.floor(dataHighlight.wind_speed)}
          unit='mph'
        >
          <div className='direction'>
            <span
              className='material-icons icon-wind'
              style={{
                transform: `rotate(${Math.floor(
                  dataHighlight.wind_direction
                ).toString()}deg)`,
              }}
            >
              navigation
            </span>
            <span className='direction-compass'>
              {dataHighlight.wind_direction_compass}
            </span>
          </div>
        </HighlightCard>
        <HighlightCard title='Humidity' value={dataHighlight.humidity} unit='%'>
          <div className='card-humidity'>
            <div className='humidity-percentage'>
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className='humidity-bar bar'>
              <div
                className='bar-percentage bar'
                style={{ width: `${dataHighlight.humidity}%` }}
              ></div>
            </div>
            <div className='percentage-sign'>%</div>
          </div>
        </HighlightCard>
        <HighlightCard
          title='Visibility'
          value={Math.floor(dataHighlight.visibility)}
          unit='miles'
        />
        <HighlightCard
          title='Air Pressure'
          value={dataHighlight.air_pressure}
          unit='mb'
        />
      </div>
    </div>
  );
}

export default Highlights;
