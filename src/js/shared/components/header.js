import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


const Header = ({user, onSignin, onSignout}) => {
    var auth;

    if (user !== undefined) {
        auth = <NavItem onClick={onSignout}>Sign out</NavItem>;
    } else {
        auth = <NavItem onClick={onSignin}>Sign in</NavItem>;
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
    onSignin: React.PropTypes.func.isRequired,
    onSignout: React.PropTypes.func.isRequired,
    user: React.PropTypes.object
};

export default Header;