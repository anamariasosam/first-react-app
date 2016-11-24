import React, { PropTypes } from 'react';

// Stateless component or pure component
const Counter = ({
  score,
  onChange,
}) => (
  <div className="counter">
    <button className="counter-action decrement" onClick={ function() { onChange(-1); } }> - </button>
    <div className="counter-score"> {score} </div>
    <button className="counter-action increment" onClick={ function() { onChange(+1); } }> + </button>
  </div>
);

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Counter;
