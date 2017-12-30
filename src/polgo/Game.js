import React from 'react';
import Board from './Board.js'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    const game = props.game;
    this.state = {
      squares: Array(64).fill(null),
      next: game.next,
      scores: game.scores,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    this.setState({
      squares: squares,
    });
  }

  render() {
    const status = `Next player: ${this.state.next}`;
    const scores = `Scores: White(${this.state.scores['W']}) Black(${this.state.scores['B']})`;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            onClick={(i) => this.handleClick(i)}
            squares={this.state.squares}
            board={this.props.board}
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