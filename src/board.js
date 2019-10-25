import React, { Component } from 'react';
import logo from './logo.svg';
import Block from './block';
import styled from 'styled-components';
import * as R from 'ramda';
import * as U from './utility';

const BoardContainer = styled.div`
  height: 500px;
  width: 500px;
  border: 2px solid black;
  background: blue;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

class Board extends Component {
  state = {
    chess: this.props.chess,
    isClicked:false,
    pastBlockSelected: {}
  };

  getImage = (name) => {
    if(R.equals(name, "")) {
      return "";
    } else {
      return <img src={logo}/>;
    }
  }

  getColor = (index) => {
    const row = Math.floor(index / 8), col = index % 8;
    if(row%2 === 0) {
      return col%2 === 0? "white" : "black";
    } else {
      return col%2 === 1? "white": "black";
    }
  }

  move = (x) => {
    let blockStateAfterMove = R.clone(this.state.pastBlockSelected), currentBlockStateAfterMove = R.clone(this.state.pastBlockSelected);
    blockStateAfterMove.position = x.position;
    currentBlockStateAfterMove.name = "";
    currentBlockStateAfterMove.type = "2";
    let newChess = R.over(R.lensIndex(x.position), x => blockStateAfterMove, this.state.chess);
    newChess = R.over(R.lensIndex(this.state.pastBlockSelected.position), x => currentBlockStateAfterMove, newChess);

    this.setState({
      chess: newChess
    });
  }

  onClick = (x) => {
    if(this.state.isClicked) {
      if(U.isValid(x) === true) {
        this.move(x);
      } else {
        console.log("wrong move!");
      }
    }
    this.setState({
      pastBlockSelected: x,
      isClicked: !this.state.isClicked
    });
  }

  render() {
    const row = R.map(x => <Block
      name={x.name}
      position={x.position}
      type={x.type}
      color={this.getColor(x.position)}
      img={this.getImage(x.name)}
      onClick={this.onClick}/>, this.state.chess);

    const board = R.map(x => <Row>{x}</Row>, R.splitEvery(8, row));

    return (
      <BoardContainer className={this.props.className}>
        {board}
      </BoardContainer>
    );
  }
}

export default Board;
