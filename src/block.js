import React, { Component } from 'react';
import styled from 'styled-components';

const BlockContainer = styled.div`
  width: 100%;
  height:100%;
  background: ${props => props.color};
  border: 2px solid black;
  text-align: center;
  justify-content: center;
  display: flex;
`;

class Block extends Component {
  state = {
    name: this.props.name,
    position: this.props.position,
    type: this.props.type
  };
  render() {
    return (
        <BlockContainer color={this.props.color} className={this.props.className}>
          {this.props.img}
        </BlockContainer>
    );
  }
}

export default Block;
