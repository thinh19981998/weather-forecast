import React from 'react';
import './HighlightCard.scss';

function HighlightCard({ title, value, unit, children }) {
  return (
    <div className='highlight-card'>
      <span className='highlight-card__heading'>{title}</span>
      <div className='highlight-card__value'>
        <span className='value'>{value} </span>
        <span className='unit'>{unit}</span>
      </div>
      {children}
    </div>
  );
}

export default HighlightCard;
