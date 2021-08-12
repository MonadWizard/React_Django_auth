import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { login } from '../actions/auth'

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    // Is the user authenticated?
    // Redirect them to the home page
    if (isAuthenticated){
        return <Redirect to='/' />
    }

    return (
        <div className="container mt-5">
            <Form onSubmit={(e) => onSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                        minLength="6"
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>
                forget your password !{' '}
                <Link to="/reset-password"> Reset Password</Link>
            </p>
            <p>
                Don't have an account ! <Link to="/signup"> Sign up</Link>
            </p>
        </div>
    )
}

const mapStateToProps = state => ({
    // is authenticated?
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
