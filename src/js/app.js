import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


function counter(state = 0, action) {
    switch (action.type) {
    case 'INCREMENT':
        return state + 1;
    case 'DECREMENT':
        return state - 1;
    default:
        return state;
    }
}

const store = (window.devToolsExtension ?
               window.devToolsExtension()(createStore) :
               createStore)(counter);

store.subscribe(() => console.log(store.getState()));

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});


class Hi extends React.Component { // eslint-disable-line no-unused-vars
    render() {
        return (
            <h1>Hi</h1>
        );
    }
}

ReactDOM.render(<Hi />, document.getElementById('root'));