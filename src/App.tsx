import React from "react";
import { GlobalState } from "hooks";
import { Header, Body } from "components";

function App() {
  return (
    <div id="app">
      <GlobalState>
        <Header />
        <Body />
      </GlobalState>
    </div>
  );
}

export default App;