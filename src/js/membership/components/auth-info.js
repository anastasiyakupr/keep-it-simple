import React from 'react';
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
    user: React.PropTypes.object,
    show: React.PropTypes.bool.isRequired,
    onSignout: React.PropTypes.func.isRequired
};

export default AuthInfo;