import React from 'react';
import logo from './logo.svg';
import * as Sentry from '@sentry/browser';
import './App.css';

if(false){
  Sentry.init({dsn: "https://f17512637ba248b595266674f5c43a55@sentry.io/1529718"});
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
