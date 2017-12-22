import _ from 'lodash'
import React from 'react';
import Square from './Square.js'

const BOARD_SIZE = 8;

export default class Board extends React.Component {
  renderRow(row) {
    return (
      <div className="board-row" key={row}>
        {_.range(BOARD_SIZE).map(column => this.renderSquare(row*BOARD_SIZE + column))}
      </div>
    )
  }

  renderSquare(index) {
    return (
      <Square
        key={index}
        value={this.props.squares[index]}
        onClick={() => this.props.onClick(index)}
      />
    );
  }

  render() {
    return (
      <div>
        {_.range(BOARD_SIZE).map(row => this.renderRow(row))}
      </div>
    );
  }
}