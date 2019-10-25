import React, { Component } from 'react';
import Logo from './logo';
import Block from './block';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as R from 'ramda';
import * as U from './utility';

const HighlightedBlack = "#4a4747", Black = "black", HighlightedWhite = "#c4c4c4", White = "white";

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
    pastBlockSelected: {},
    highlight: [],
  };

  getImage = (name, type) => {
    if(R.equals(name, "")) {
      return "";
    } else {
      return <Logo fill={(type === 0 && "red") || (type === 1 && "blue")}/>;
    }
  }

  getColor = (index) => {
    const highlight = this.state.highlight;
    const row = Math.floor(index / 8), col = index % 8;
    if(row%2 === 0) {
      return col%2 === 0? R.contains(index, highlight) && HighlightedWhite || White : R.contains(index, highlight) && HighlightedBlack || Black;
    } else {
      return col%2 === 1? R.contains(index, highlight) && HighlightedWhite || White : R.contains(index, highlight) && HighlightedBlack || Black;
    }
  }

  erase = (x,chess) => {
    const newChess = R.update(x, {name:"", position: x, type: 2}, chess);
    return newChess
  }

  set = (x, newState, chess) => {
    const newChess = R.update(x, newState, chess);
    return newChess;
  }

  onClick = (x) => {
    if(this.state.isClicked) {
      if(U.isValid(x, R.clone(this.state.highlight))) {
        let newChess = R.clone(this.state.chess);
        const newBlockState = {
          name: this.state.pastBlockSelected.name,
          position: x.position,
          type: this.state.pastBlockSelected.type
        };
        newChess = this.erase(x.position, R.clone(newChess));
        newChess = this.erase(this.state.pastBlockSelected.position, R.clone(newChess));
        newChess = this.set(x.position, newBlockState, R.clone(newChess));
        
        this.setState({
          chess: newChess,
          isClicked: !this.state.isClicked,
          pastBlockSelected: {},
          highlight: []
        })
      } else {
        toast.error("Sorry! Wrong Move :-(!");
      }
    } else {
      const chess = R.clone(this.state.chess);
      if(U.hasPiece(x, R.clone(chess))) {
        const highlight = U.getPossibleMoves(x, R.clone(chess));
        
        this.setState({
          isClicked: !this.state.isClicked,
          pastBlockSelected: x,
          highlight: highlight
        })
      }
    }
  }

  render() {
    const row = R.map(x => <Block
      name={x.name}
      position={x.position}
      type={x.type}
      color={this.getColor(x.position)}
      img={this.getImage(x.name, x.type)}
      onClick={this.onClick}/>, this.state.chess);

    const board = R.map(x => <Row>{x}</Row>, R.splitEvery(8, row));

    return (
      <BoardContainer
        className={this.props.className}
      >
        <ToastContainer />
        {board}
      </BoardContainer>
    );
  }
}

export default Board;
