import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import banner1 from '../../../images/logo/logo1.png';
const Header = () => {
    return (
        <>
            <Navbar bg="white">
                <Container>
                    <Navbar.Brand href="#home">
                        <img style={{ width: '50px' }} src={banner1} alt="" />
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;