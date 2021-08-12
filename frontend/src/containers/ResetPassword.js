import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { reset_password } from '../actions/auth'

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRquestSent] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
    })

    const { email } = formData
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()
        reset_password(email)
        setRquestSent(true)
    }

    // Is the user authenticated?
    // Redirect them to the home page
    if (requestSent) {
        return <Redirect to="/" />
    }

    return (
        <div className="container mt-5">
        <h1>Request password reset: </h1>
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
                        give your valid mail which used to login before
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Reset Password
                </Button>
            </Form>
        </div>
    )
}

export default connect(null, { reset_password })(ResetPassword)
