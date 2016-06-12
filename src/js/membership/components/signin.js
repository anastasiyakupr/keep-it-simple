import React from 'react';
import {Link} from 'react-router';
import {Well} from 'react-bootstrap';

import Layout from '../../shared/components/layout';
import SignUpWell from '../../shared/components/signup-well';
import AccessWarn from './access-warn';


export default () => (
    <Layout sidebar={<SignUpWell/>}>
        <h1>Sign In</h1>
        <p>
            Need an account? <Link to="/signup">Sign up</Link> free.
            Your opinions and comments would be greatly
            appreciated.
        </p>
        <hr/>
        <Well>
            <form autoComplete="off">
            </form>
        </Well>
        <AccessWarn />
    </Layout>
);