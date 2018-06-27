import React from 'react'
import { connect } from 'react-redux'
import {
  Jumbotron,
  Col,
  Container,
  Row,
} from 'reactstrap'

import { alertActions } from '../actions/alert.actions'
import { AppRouter } from '../components/AppRouter'
import FlashMessages from '../components/FlashMessages'
import { history } from '../helpers/history'

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
