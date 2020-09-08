import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import Card from './Card';
import STORE from './store';


it('renders without crashing', () =>{
    const div = document.createElement('new');
    ReactDOM.render(<List />,div);
    ReactDOM.unmountComponentAtNode(div);

});


// console.log(props)
it('renders the UI as expect', (props) => {
    const tree = renderer
        .create(<List key={props.id} header={props.header}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();

});