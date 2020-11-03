import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand id="Anagrams" color="" href='/'>Anagrams</Navbar.Brand>
            <Nav>
                <Nav.Link id="Home" href="/">Home</Nav.Link>
                <Nav.Link id="TopTen" href="/TopTen">Live top ten</Nav.Link>
                <Nav.Link id="HowToUse" href="/HowToUse">How to use</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;