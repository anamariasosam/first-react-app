import React, { PropTypes } from 'react';

// Stateless component or pure component
const Counter = ({
  score,
}) => (
  <div className="counter">
    <button className="counter-action decrement"> - </button>
    <div className="counter-score"> {score} </div>
    <button className="counter-action increment"> + </button>
  </div>
);

Counter.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Counter;
