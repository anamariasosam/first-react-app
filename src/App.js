import React, { Component } from 'react';
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
          <Player name="ana" score={110} />
          <Player name="alex" score={100} />
        </div>
      </div>
    );
  }
}

export default App;
