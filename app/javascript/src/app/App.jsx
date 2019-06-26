import React from 'react'
import { connect } from 'react-redux'
import {
  Jumbotron,
  Col,
  Container,
  Row,
} from 'reactstrap'

import alertActions from '../alerts/actions'
import AppRouter from './AppRouter'
import FlashMessages from '../alerts/FlashMessages'
import history from '../helpers/History'

class App extends React.Component {
  constructor(props) {
    super(props)

    const { dispatch } = this.props

    // clear alert on location change
    history.listen(() => dispatch(alertActions.clear()))
  }

  render() {
    return (
      <Jumbotron>
        <Container>
          <Row>
            <Col sm={{ size: 8, offset: 2 }}>
              <FlashMessages />
              <AppRouter />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    )
  }
}

export default connect()(App)
