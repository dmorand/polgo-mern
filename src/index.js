import React from 'react';
import ReactDOM from 'react-dom';
import Game from './polgo/Game.js';
import './index.css';

const POST = {
  method: 'POST'
};

fetch("./games", POST)
.then(response => response.json())
.then(renderGame)

function renderGame(game) {
  ReactDOM.render(
    <Game game={game} />,
    document.getElementById('root')
  );
}