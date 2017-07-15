import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Router, useRouterHistory} from 'react-router';
import {createHistory} from 'history';
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

import reducers from './reducers';
import routes from './routes';
import {dailyQuote} from './shared/actions';

import './app.scss';

const history = useRouterHistory(createHistory)({
    basename: window.location.pathname
});

const enhancer = applyMiddleware(
    routerMiddleware(history),
    thunk);
const store = createStore(reducers, {},
    window.devToolsExtension ?
        compose(enhancer, window.devToolsExtension()) :
        enhancer);

store.dispatch(dailyQuote());

ReactDOM.render(
    <Provider store={store}>
        <Router history={syncHistoryWithStore(history, store)}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
