import React from 'react';
import logo from './logo.svg';

function DefaultScreen (props) {
    return (
      <header className="App-header">
          <button onClick={props.onClick}>
            <img 
              src={logo} 
              className="App-logo" 
              alt="logo"
            />
          </button>
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
    );
}

export default DefaultScreen;