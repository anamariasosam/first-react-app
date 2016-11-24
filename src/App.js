import React, { Component, PropTypes } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //
  //   }
  // }
  //
  render() {
    const {
      name,
      score,
    } = this.props

    return (
      <div className="scoreboard">
        <Header title="ScoreBoard" />

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
};

export default App;
