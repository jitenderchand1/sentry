import React from 'react';
import logo from './logo.svg';
import * as Sentry from '@sentry/browser';
import './App.css';

if(process.env.REACT_APP_ENV === 'release'){
  Sentry.init({dsn: "https://3xxxee3xxxa4dde8031d0f8d5081250@sentry.io/1529699"});
}


Sentry.captureMessage("dsdd", "sadf")

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
