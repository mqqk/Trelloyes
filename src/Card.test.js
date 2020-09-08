import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';


// console.log(props);
it('render withuot crashing', () =>{
    const div = document.createElement('new');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);

});