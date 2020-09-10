//create the template for the props to be eventually inputted

import React from 'react';
import './Card.css';

export default class Card extends React.Component{
    
    render(){
        // console.log(this.props.listId);
        return(
            <div className="Card">
                <button onClick={() => this.props.onDelete(this.props.cardId,this.props.listId)} type="button">delete</button>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
                               
        )
    }
}
