import React from "react";
import GlobalState from "./hooks/GlobalState";
import Header from "./components/HeaderContainer/Header";
import Body from "./components/BodyContainer/Body";

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