import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import logo from '../logo.png'

const NavbarDemo = () => {
    return (
        <div>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/">
                            <img
                                src={logo}
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Link>
                    </Navbar.Brand>
                </Container>

                <Link to="/login">
                    <Button variant="light" size="lg">
                        Login
                    </Button>
                </Link>
            </Navbar>
        </div>
    )
}

export default NavbarDemo
