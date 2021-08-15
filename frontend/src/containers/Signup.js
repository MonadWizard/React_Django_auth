import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { signup } from '../actions/auth'

import axios from 'axios'

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        re_password: '',
    })

    const { name, email, password, re_password } = formData
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()
        if (password === re_password) {
            signup(name, email, password, re_password)
            setAccountCreated(true)
        }
    }

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://localhost:8000`
            )
            window.location.replace(res.data.authorization_url)
        } catch (error) {}
    }

    // Is the user authenticated?
    // Redirect them to the home page
    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    if (accountCreated) {
        return <Redirect to="/login" />
    }

    return (
        <div className="container mt-5">
            <Form onSubmit={(e) => onSubmit(e)}>
                <h1>Sign Up</h1>
                <p>Cteate your accounts </p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter UserName"
                        name="name"
                        value={name}
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Please confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        name="re_password"
                        value={re_password}
                        onChange={(e) => onChange(e)}
                        minLength="6"
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p>
                already have an account !{' '}
                <Link to="/login"> Reset Password</Link>
            </p>

            <Button variant="Danger" onClick={continueWithGoogle}>
                google sign Up
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    // is authenticated?
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { signup })(Signup)
