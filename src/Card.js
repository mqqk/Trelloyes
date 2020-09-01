//used to pull the allCards data from the STORE
//populates the data into the HTML within the List.js

import React from 'react';
import ReactDOM from 'react-dom';
import './STORE.js';

console.log("running Cards.js")
console.log(STORE.allCards);
function Card(allCards){
    return(
        <div className="Card">
            <button type="button">delete</button>
            <h3>First card

            </h3>
            <p>

            </p>

        </div>
    )
}