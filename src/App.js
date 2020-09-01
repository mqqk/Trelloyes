import React from 'react';
import logo from './logo.svg';
import List from './List.js';
import STORE from './store';
import './App.css';


console.log("App is Running")
// console.log(STORE);

function App() {

  // console.log(STORE.lists);
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
      {STORE.lists.map(list =>
          <List
            key={list.id}
            header={list.header}
            cardIds={list.cardIds.map(Id => STORE.allCards[Id])}//what is happening here 
          />
          )}
      </div>
    </main>
  );
}



export default App;
