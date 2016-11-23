import React from 'react';


// Stateless component or pure component
const Home = ({
  name,
  score,
}) => (
  <div className="scoreboard">
    <div className="header">
      <h1>scoreboard</h1>
    </div>

    <div className="players">
      <div className="player">
        <div className="player-name">
          {name}
        </div>
        <div className="player-score">
          <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score"> {score} </div>
            <button className="counter-action increment"> + </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home
