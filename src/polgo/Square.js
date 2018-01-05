import React from 'react';

const WHITE = 'W';
const BLACK = 'B';
const ILLEGAL = 'I';

export default class Square extends React.Component {
  render() {
    return (
      <button className={this.getClassName()} onClick={() => this.props.onClick()}>
        {this.getContent()}
      </button>
    );
  }

  getClassName() {
    if (this.props.value === ILLEGAL) return "square illegal";
    return "square";
  }

  getContent() {
    switch (this.props.value) {
      case BLACK: return <div className="circle black"/>
      case WHITE: return <div className="circle white"/>
    }
  }
}