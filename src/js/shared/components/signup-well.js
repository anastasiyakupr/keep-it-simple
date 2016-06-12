import React from 'react';
import {Link} from 'react-router';
import {Well} from 'react-bootstrap';


const SignUpWell = ({user}) => {
    if (user) {
        return null;
    }

    return (
        <Well>
            <h4>Need an account?</h4>
            <p>
                <Link to="/signup">Sign up</Link> free.
            </p>
        </Well>
    );
};

SignUpWell.propTypes = {
    user: React.PropTypes.object
};

export default SignUpWell;