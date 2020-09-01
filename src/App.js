import React from 'react';
import logo from './logo.svg';
import './App.css';


console.log("App is Running")
function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
        <img src={logo} className="App-logo" alt="logo" />
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
      <div className="App-list">

      </div>
    </main>
  );
}



export default App;
