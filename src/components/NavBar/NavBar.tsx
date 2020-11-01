import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand color="" href='/'>Anagrams</Navbar.Brand>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Top 10 Live</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;