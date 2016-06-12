import React from 'react';
import {Link} from 'react-router';
import {Well} from 'react-bootstrap';

import Layout from '../../shared/components/layout';
import SignInWell from '../../shared/components/signin-well';
import AccessWarn from './access-warn';


export default () => (
    <Layout sidebar={<SignInWell/>}>
        <h1>Sign Up</h1>
        <p>
            Already got an account? <Link to="/signin">Sign in</Link>,
            please.
        </p>
        <hr/>
        <Well>
            <form autoComplete="off">
            </form>
        </Well>
        <AccessWarn />
    </Layout>
);