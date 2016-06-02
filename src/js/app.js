import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

/*eslint-disable no-unused-vars*/
import {Provider} from 'react-redux';
import {Grid} from 'react-bootstrap';

import Header from './shared/components/header';
import Footer from './shared/components/footer';
/*eslint-enable no-unused-vars*/


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


const App = () => ( // eslint-disable-line no-unused-vars
    <Grid>
        <Header />
        <hr />
        <Footer />
    </Grid>
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);