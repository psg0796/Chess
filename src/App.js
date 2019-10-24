import React, { Component } from 'react';
import Board from './board';
import styled from 'styled-components';

const StyledBoard = styled(Board)`
  height: 50vh;
  width: 50vh;
  margin: auto;
`;

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <StyledBoard />
      </AppContainer>
    );
  }
}

export default App;
