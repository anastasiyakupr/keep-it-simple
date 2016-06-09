import React from 'react';
import {Grid} from 'react-bootstrap';
import {Route} from 'react-router';

import Posts from './posts/components/posts';
import Header from './shared/containers/header';
import Footer from './shared/components/footer';


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

export default (
    <Route component={App}>
        <Route path="/" component={Posts} />
        <Route path="posts" component={Posts} />
    </Route>
);