import React, { Component } from 'react';
import Board from './board';
import styled from 'styled-components';
import * as R  from 'ramda';

const StyledBoard = styled(Board)`
  height: 50vh;
  width: 50vh;
  margin: auto;
`;

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
`;

const pieces = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

class App extends Component {
  render() {
    const chess = R.range(0, 64).map(x => {
      if(x < 16) {
        return  x < 8 ? ({name: pieces[x], position: x, type: 0}) : ({name: "P", position: x, type: 0});
      } else if(x > 47) {
        return  x < 56 ? ({name: "P", position: x, type: 1}) : ({name: pieces[63 - x], position: x, type: 1});
      } else {
        return ({name: "", position: x, type: 2});
      }
    });
    return (
      <AppContainer>
        <StyledBoard chess={chess}/>
      </AppContainer>
    );
  }
}

export default App;
