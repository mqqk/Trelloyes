import React from 'react';
import Card from './Card';
import './List.css';


export default class List extends React.Component{
  

    render(){

        // console.log(this.props.header);
        console.log('hi',this.props.cardId);
        return(
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                    <button 
                        onClick={() => this.props.onRandom(this.props.cardId)}
                        type="button" name="add">Add a Card
                    </button>
                </header>
                
                <div className="List-cards">
                    {this.props.cardIds.map(card =>
                        <Card
                            listId={this.props.cardId} 
                            key={card.id}
                            cardId={card.id}
                            title={card.title}
                            content={card.content}
                            onDelete={this.props.onDelete}            
                        />
                    )}
                    
                </div>
            
            </section>
        )
    }
}


