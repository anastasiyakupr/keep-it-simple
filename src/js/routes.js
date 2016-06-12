import React from 'react';
import {Grid} from 'react-bootstrap';
import {Route} from 'react-router';

import SignIn from './membership/components/signin';
import SignUp from './membership/components/signup';
import Posts from './posts/components/posts';
import Footer from './shared/components/footer';
import Header from './shared/containers/header';


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
        <Route path="signin" component={SignIn} />
        <Route path="signup" component={SignUp} />
    </Route>
);