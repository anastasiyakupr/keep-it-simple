import React from 'react';
import PropTypes from 'prop-types';
import {LinkContainer} from 'react-router-bootstrap';
import {NavItem} from 'react-bootstrap';


const AuthInfo = ({user, show, onSignout}) => {
    if (!show) {
        return null;
    }

    if (!user) {
        return (
            <LinkContainer to="/signin">
                <NavItem>Sign in</NavItem>
            </LinkContainer>
        );
    }

    return <NavItem onClick={onSignout}>Sign out</NavItem>;
};

AuthInfo.propTypes = {
    user: PropTypes.object,
    show: PropTypes.bool.isRequired,
    onSignout: PropTypes.func.isRequired
};

export default AuthInfo;