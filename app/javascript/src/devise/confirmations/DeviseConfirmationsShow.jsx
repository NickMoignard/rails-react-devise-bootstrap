import React from 'react'
import { connect } from 'react-redux'
import {
  Col,
  Row
} from 'reactstrap'

import confirmationActions from './actions'

class DeviseConfirmationsShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      token: ''
    }
  }

  componentDidMount () {
    const urlParams = new URLSearchParams(this.props.location.search)
    const token = urlParams.get('confirmation_token')

    this.props.dispatch(confirmationActions.confirm(token))
  }

  render() {
    return (
      <Row>
        <Col md={{ size: 6, offset: 3}}>
          <h2>Confirming your account ...</h2>
        </Col>
      </Row>
    )
  }
}

export default connect()(DeviseConfirmationsShow)
