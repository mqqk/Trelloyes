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




    handleRandomCard = (cardId) =>{
      console.log('running random card')
      console.log(cardId);
      

      const newRandomCard = () => {
        const id = Math.random().toString(36).substring(2, 4)
          + Math.random().toString(36).substring(2, 4);
        return {
          id:id,
          title: `Random Card ${id}`,
          content: 'lorem ipsum',
        }
      }
      console.log(newRandomCard);

      const addCard = newRandomCard();
      console.log(addCard);
      // const newKey = addCard.id;
      console.log(this);
      const newLists = this.state.lists.map(list => {        
        if(list.id===cardId){
          return{
            ...list,
            cardIds:[...list.cardIds,addCard.id]
          };
        }
        return list;
      })
      console.log(newLists);

      this.setState({

        lists:newLists,
        allCards:{
          ...this.state.allCards,
          [addCard.id]:addCard,
        }

      })
      console.log(this.state)

    }


  handleCardDelete = (cardId) => {
    const newLists = this.state.lists.map(list =>({
      ...list,
      cardIds:list.cardIds.filter(id => id!==cardId)

    }))

    const newCards = this.omit(this.state.allCards,cardId);

    console.log(newLists);
    console.log(newCards);

    this.setState({
      lists:newLists,
      allCards:newCards}
    )
 
  }





  

  render(){

    // console.log(this.state.lists);
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