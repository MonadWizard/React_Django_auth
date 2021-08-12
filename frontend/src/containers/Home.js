import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container mt-6">
            <Card>
                <Card.Header>Djoser</Card.Header>
                <Card.Body>
                    <Card.Title>Django React Auth system</Card.Title>
                    <Card.Text>
                        Here we use djoser from Django Rest API and React-Redux
                        as UI view
                    </Card.Text>
                    <Link to="/login">
                        <Button variant="dark" size="lg">
                            Go to Login Page
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Home
