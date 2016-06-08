import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


const Header = ({user, showSignin, onSignout}) => {
    var auth;

    if (user) {
        auth = <NavItem onClick={onSignout}>Sign out</NavItem>;
    } else if (showSignin) {
        auth = (
            <LinkContainer to="/signin">
                <NavItem>Sign in</NavItem>
            </LinkContainer>
        );
    }

    return (
        <Navbar inverse fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Keep It Simple Blog</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem disabled>About</NavItem>
                    <NavItem disabled>Contact</NavItem>
                </Nav>
                <Nav pullRight>
                    {auth}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

Header.propTypes = {
    onSignout: React.PropTypes.func.isRequired,
    showSignin: React.PropTypes.bool.isRequired,
    user: React.PropTypes.object
};

export default Header;