import React from 'react';
import ReactDOM from 'react-dom';
import Game from './polgo/Game.js';
import './index.css';

const POST = {
  method: 'POST'
};

fetch("./game/create", POST)
.then(response => response.json())
.then(renderGame)

function renderGame(game) {
  ReactDOM.render(
    <Game gameId={game.uuid} board={game.board} />,
    document.getElementById('root')
  );
}