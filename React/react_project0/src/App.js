import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from "./components/Todos";

function App() {
  /* JSX start */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Application</h1>

        <p>
          One step @ a time.
          <i> ^_*</i>
        </p>

      </header>
    <Todos/>

    </div>
  );

    /* JSX end */
}

export default App;
