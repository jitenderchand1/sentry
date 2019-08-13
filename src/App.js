import React from 'react';
import logo from './logo.svg';
import * as Sentry from '@sentry/browser';
import './App.css';

Sentry.init({dsn: "https://61a77ee231ab491ab40cd264b170b567@sentry.io/1529511"});

const check = () => {
  throw Error('Error')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={check}>click button</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
