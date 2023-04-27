import Amount from './Amount';
import './App.css';
import Position from './Position';
import { BALANCE, BET, BetPositions, WIN } from './Constants';
import { HeaderPanel, HeaderItem, PositionPanel, ContainerPanel } from './Styles';
import WinnerResult from './WinnerResult';
import FinalPositions from './FinalPositions';
import ActionPanel from './ActionPanel';
import * as React from 'react';

function App() {
  return (
      <ContainerPanel>
          <HeaderPanel container spacing={2}>
          <HeaderItem>
            <Amount label={BALANCE} />
            <Amount label={BET} />
            <Amount label={WIN} />
          </HeaderItem>
          </HeaderPanel>
          <FinalPositions />
      <WinnerResult />
          <PositionPanel direction="row" spacing={6}>
          <Position name={BetPositions.ROCK} />
          <Position name={BetPositions.PAPER} />
          <Position name={BetPositions.SCISSORS} />
          </PositionPanel>
          <ActionPanel />
      </ContainerPanel>
  );
}

export default App;
