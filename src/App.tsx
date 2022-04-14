import React from "react";
import logo from "./logo.svg";
import { Home } from "./features/github/pages/Home";
import * as ReactDom from "react-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <Home />
      </header>
    </div>
  );
}

export default App;
