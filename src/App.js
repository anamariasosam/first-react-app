import React, { Component, PropTypes } from 'react';
import './App.css';
import Header from './Header';
import Player from './Player';



class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //
  //   }
  // }
  //
  render() {

    return (
      <div className="scoreboard">
        <Header title="ScoreBoard" />

        <div className="players">
          { this.props.players.map(function(player) {
            return <Player name={player.name} score={player.score} key={player.id}/>
          })}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
}

export default App;
