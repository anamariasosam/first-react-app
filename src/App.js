import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

var nextId = 4;

class App extends Component {
  constructor() {
    super();

    this.state = {
        players: [
        {
          id: 11324,
          name: "Ana",
          score: 11,

        },
        {
          id: 224,
          name: "Alex",
          score: 112,

        },
        {
          id: 45673,
          name: "Alex",
          score: 112,

        },
      ],
    };

     this.onScoreChange = this.onScoreChange.bind(this);
     this.onPlayerAdd = this.onPlayerAdd.bind(this);
  }

  render() {
    const {
      players
    } = this.state;
    return (
      <div className="scoreboard">
        <Header players={players} />

        <div className="players">
          {players.map(player => {
            const {
              id,
              name,
              score,
            } = player;
            return(
              <Player
                onScoreChange={delta => { this.onScoreChange(id, delta); }}
                name={name}
                score={score}
                key={id}
              />
            )
          })}
        </div>

        <AddPlayerForm onAdd={this.onPlayerAdd} />
      </div>
    );
  }

  onScoreChange(index, delta) {
    let { players } = this.state;

    players.forEach(item => {
      if (item.id === index) {
        item.score += delta;
      }
    });

    this.setState({ players });
  }

  onPlayerAdd(name) {
    let { players } = this.state;

    // players.push({
    //   name,
    //   score: 0,
    //   id: nextId,
    // });

    const newPlayers = [
      ...players,
      {
        name,
        score: 0,
        id: nextId,
      },
    ];

    this.setState({ players: newPlayers });
    nextId += 1;
  }
}

export default App;
