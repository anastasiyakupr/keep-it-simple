import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-bootstrap';
import {Route} from 'react-router';

import AuthInfo from './membership/containers/auth-info';
import SignIn from './membership/containers/signin';
import SignUp from './membership/containers/signup';

import Posts from './posts/containers/posts';
import Post from './posts/containers/post';

import Footer from './shared/components/footer';
import Header from './shared/components/header';


const App = ({children}) => (
    <Grid>
        <Header>
            <AuthInfo />
        </Header>
        {children}
        <hr />
        <Footer />
    </Grid>
);

App.propTypes = {
    children: PropTypes.element.isRequired
};

export default (
    <Route component={App}>
        <Route path="/" component={Posts} />
        <Route path="posts" component={Posts} />
        <Route path="post/:slug" component={Post} />
        <Route path="signin" component={SignIn} />
        <Route path="signup" component={SignUp} />
    </Route>
);