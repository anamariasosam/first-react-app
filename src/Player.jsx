import React, { Component, PropTypes } from 'react';
import Counter from './Counter';

class Player extends Component {
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
          <Counter score={score} />
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
