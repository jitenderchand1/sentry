import React from 'react';
import * as Sentry from '@sentry/browser';
import logo from './logo.svg';
import './App.css';

const check = () => {
  throw Error('new Error')
}

const check2 = () => {
  throw Error('new Error')
}

const RELEASE = '0.0.1';

Sentry.init({
  dsn: 'https://0574b296fc16458b9067e2bd22ab23be@sentry.io/1530191',
  release: RELEASE,
  environment: 'prod'
});

Sentry.captureMessage("hello", "jitender")

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={check}>click button</button>
        <button onClick={check2}>click button 2</button>
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
