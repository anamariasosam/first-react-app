import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const {
      name,
      score,
    } = this.props

    return (
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
                <div className="counter-score">
                  {score}
                </div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  name: PropTypes.integer.isRequired,
};

export default App;
