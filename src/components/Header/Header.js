import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant='dark'>
                    <Container>
                        <Navbar.Brand as={Link} to="/">Home Review</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
                                <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                                <Nav.Link as={Link} to="/about">About me</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;