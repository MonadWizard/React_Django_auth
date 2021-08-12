import React, { Fragment } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'

import logo from '../logo.png'

const NavbarDemo = ({ logout, isAuthenticated }) => {
    const guestLinks = () => (
        <Fragment>
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
        </Fragment>
    )

    const authLinks = () => (

        <Nav.Link href="#!" onClick={logout} >logout</Nav.Link>

    )


    return (
        <div>
            <Navbar bg="dark" variant="light">
                    <Nav className="me-auto"></Nav>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    {isAuthenticated ? authLinks() : guestLinks()}

            </Navbar>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { logout })(NavbarDemo)
