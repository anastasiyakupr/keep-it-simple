import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Grid} from 'react-bootstrap';

import Header from './shared/components/header';
import Footer from './shared/components/footer';


function reducer(state = {}, action) {
    switch (action.type) {
    default:
        return state;
    }
}

const store = (window.devToolsExtension ?
               window.devToolsExtension()(createStore) :
               createStore)(reducer);

store.subscribe(() => console.log(store.getState()));

const App = () => (
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