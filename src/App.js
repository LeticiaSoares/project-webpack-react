import React from 'react'
import { Col, Row, Container } from 'react-awesome-styled-grid'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css'

import ExamplePage from 'pages/ExamplePage'

const App = () => (
    <Router>
        <Container fluid>
            <Row>
                <Col xs={8} md={6}>
                    <Switch>
                        <Route path="/">
                            <ExamplePage/>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
    </Router>
)

export default App
