import React from 'react'
import { connect } from 'react-redux'
import {
  Jumbotron,
  Col,
  Container,
  Row,
} from 'reactstrap'

import { alertActions } from '../alert/actions'
import AppRouter from './AppRouter'
import FlashMessages from './FlashMessages'
import { history } from '../helpers/History'

class App extends React.Component {
  constructor(props) {
    super(props)

    const { dispatch } = this.props
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear())
    })
  }

  render() {
    const basePath = '/' + location.pathname.split('/')[1]
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
