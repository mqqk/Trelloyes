import React from 'react';
import List from './List.js';
import './App.css';


// console.log("App is Running")
// console.log(STORE);



export default class App extends React.Component {

  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      }
    ],
    
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    }


  }

  omit(obj,keyToOmit){
    let {[keyToOmit]:_, ...rest} =obj;
    return rest;
  }

  handleCardDelete = (cardId,listId) => {
    console.log('running card delete',{cardId},{listId});

    console.log(this.state.lists[0].cardIds);
    const keyToOmit = (this.state.lists.filter(itm => itm.id===listId)
    )
    console.log(keyToOmit);

    const oldValue = this.state.lists[0].cardIds;
    console.log(oldValue);//

    const newKeyToOmit = keyToOmit[0].cardIds.filter(itm => itm!==cardId);

    
    console.log(newKeyToOmit);

    this.setState({
      
      lists:{

      'id':'1',
      'header':'First list',
      'cardIds':newKeyToOmit,

    }})
 
  }

  handleRandomCard(){
    console.log('running random card')
  }



  

  render(){

    console.log(this.state.lists);
    return (
      <main className="App">        
          <h1>Trelloyes!</h1>        
          <div className="App-list">
          {this.state.lists.map(list =>          
            <List
              key={list.id}
              cardId={list.id}
              header={list.header}
              cardIds={list.cardIds.map(Id => this.state.allCards[Id])}
              onDelete={this.handleCardDelete}
              onRandom={this.handleRandomCard}
            />)}          
          </div>
      </main>)
  }
}