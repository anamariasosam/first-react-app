import React, { Component, PropTypes } from 'react';

class Player extends Component {
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
    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Player;
