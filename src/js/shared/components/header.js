import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


const Header = ({children}) => (
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
                {children}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

Header.propTypes = {
    children: React.PropTypes.node
};

export default Header;