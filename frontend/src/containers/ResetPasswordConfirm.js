import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { reset_password_confirm } from '../actions/auth'

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRquestSent] = useState(false)
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    })

    const { new_password, re_new_password } = formData
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()

        const uid = match.params.uid
        const token = match.params.token


        reset_password_confirm(uid, token, new_password, re_new_password)
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


            <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="New Password"
                        name="new_password"
                        value={new_password}
                        onChange={(e) => onChange(e)}
                        minLength="6"
                        required
                    />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm new Password"
                        name="re_new_password"
                        value={re_new_password}
                        onChange={(e) => onChange(e)}
                        minLength="6"
                        required
                    />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Reset Password
                </Button>
            </Form>
        </div>
    )
}

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm)
