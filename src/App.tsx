import React from "react";
import * as Styled from "./App.styles";
import { RightPanel } from "./RightPanel/RightPanel";
import { MainPanel } from "./MainPanel/MainPanel";

function App() {
  return (
    <Styled.Page>
      <MainPanel />

      <RightPanel />
    </Styled.Page>
  );
}

export default App;
