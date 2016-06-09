import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import {Provider} from 'react-redux';

import routes from './routes';


function reducer(state = {user: null}, action) {
    switch (action.type) {
    default:
        break;
    }

    return state;
}

const enhancer = applyMiddleware(thunk);
const store = createStore(combineReducers({reducer, routing: routerReducer}), {},
    window.devToolsExtension ?
        compose(enhancer, window.devToolsExtension()) :
        enhancer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={syncHistoryWithStore(browserHistory, store)}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);