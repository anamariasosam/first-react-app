import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var PLAYERS = [
  {
    id: 1,
    name: "Ana",
    score: 11,

  },
  {
    id: 2,
    name: "Alex",
    score: 112,

  },
  {
    id: 3,
    name: "Alex",
    score: 112,

  },
]

ReactDOM.render(
  <App players={PLAYERS} />,
  document.getElementById('root')
);
