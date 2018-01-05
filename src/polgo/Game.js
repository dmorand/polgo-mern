import React from 'react';
import Board from './Board.js'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    const game = props.game;
    this.state = {
      next: game.next,
      scores: game.scores,
      board: game.board,
    };
  }

  handleClick(row, column) {
    const gameId = this.props.game.id;

    fetch(`./games/${gameId}`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({row, column}),
    })
    .then(response => response.json())
    .then(game => this.setState({
      next: game.next,
      scores: game.scores,
      board: game.board,
    }));
  }

  render() {
    const status = `Next player: ${this.state.next}`;
    const scores = `Scores: White(${this.state.scores['W']}) Black(${this.state.scores['B']})`;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            onClick={(row, column) => this.handleClick(row, column)}
            board={this.state.board}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{scores}</div>
        </div>
      </div>
    );
  }
}