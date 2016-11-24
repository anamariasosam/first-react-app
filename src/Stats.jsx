import React, { PropTypes } from 'react';

// Stateless component or pure component

const Stats = ({
  players
}) => {

  let totalPlayers = players.length;
  let totalPoints = players.reduce(function(total, player) {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

Stats.propTypes = {
  players: PropTypes.array.isRequired
};

export default Stats;
