import React, { Component } from 'react';
import logo from './logo.svg';
import Block from './block';
import styled from 'styled-components';

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
  render() {
    return (
      <BoardContainer className={this.props.className}>
        <Row>
          <Block color="yellow" img={<img src={logo}/>}/>
          <Block color="yellow" img={<img src={logo}/>}/>
        </Row>
        <Row>
          <Block color="yellow" img={<img src={logo}/>}/>
          <Block color="yellow" img={<img src={logo}/>}/>
        </Row>
      </BoardContainer>
    );
  }
}

export default Board;
