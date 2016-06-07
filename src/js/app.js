import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import {Provider} from 'react-redux';
import {Grid} from 'react-bootstrap';

import Posts from './posts/components/posts';
import Header from './shared/containers/header';
import Footer from './shared/components/footer';


function reducer(state = {user: null}, action) {
    switch (action.type) {
    default:
        break;
    }

    return state;
}

const store = (window.devToolsExtension ?
               window.devToolsExtension()(createStore) :
               createStore)(combineReducers({
                   reducer,
                   routing: routerReducer
               }));

store.subscribe(() => console.log(store.getState()));

const App = ({children}) => (
    <Grid>
        <Header />
        {children}
        <hr />
        <Footer />
    </Grid>
);

App.propTypes = {
    children: React.PropTypes.element.isRequired
};

ReactDOM.render(
    <Provider store={store}>
        <Router history={syncHistoryWithStore(browserHistory, store)}>
            <Route component={App}>
                <Route path="/" component={Posts} />
                <Route path="posts" component={Posts} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);