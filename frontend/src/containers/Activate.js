import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { verify } from '../actions/auth'

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false)
    const verify_account = (e) => {
        const uid = match.params.uid
        const token = match.params.token

        verify(uid, token)
        setVerified(true)
    }

    // Is the user authenticated?
    // Redirect them to the home page
    if (verified) {
        return <Redirect to="/" />
    }

    return (
        <div className="container ">
            <button
                onClick={verify_account}
                style={{ marginTop: '50px' }}
                type="button"
                className="btn btn-primary"
            >
                verify
            </button>
        </div>
    )
}

export default connect(null, { verify })(Activate)
