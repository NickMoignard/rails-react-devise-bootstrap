import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Col,
  Row
} from 'reactstrap'

import { userActions } from '../../../actions/user.actions'

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

    this.props.dispatch(userActions.confirm(token))
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
