import _ from 'lodash'
import React from 'react';
import Square from './Square.js'

export default class Board extends React.Component {
  render() {
    var rowIndex = 0;
    return (
      <div>
        {_.map(this.props.board, row => this.renderRow(row, rowIndex++))}
      </div>
    );
  }

  renderRow(row, rowIndex) {
    var columnIndex = 0;
    return (
      <div className="board-row" key={rowIndex}>
        {_.map(row, square => this.renderSquare(row[columnIndex], rowIndex, columnIndex++))}
      </div>
    )
  }

  renderSquare(value, row, column) {
    return (
      <Square
        key={`${row},${column}`}
        value={value}
        onClick={() => this.props.onClick(row, column)}
      />
    );
  }
}