import React from 'react';
import { useState } from 'react';

function TempScale({ getScale }) {
  const [celcius, setCelcius] = useState(true);

  const activeCelciusScale = () => {
    setCelcius(true);
    getScale(true);
  };

  const activeFarenheitScale = () => {
    setCelcius(false);
    getScale(false);
  };

  return (
    <div className='change-scale'>
      <button
        className={`btn celcius ${celcius ? 'active' : ''}`}
        onClick={() => activeCelciusScale()}
      >
        ℃
      </button>
      <button
        className={`btn farenheit ${celcius ? '' : 'active'}`}
        onClick={() => activeFarenheitScale()}
      >
        &#8457;
      </button>
    </div>
  );
}

export default TempScale;
