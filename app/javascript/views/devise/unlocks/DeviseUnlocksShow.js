import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Col,
  Row
} from 'reactstrap'

import { userActions } from '../../../actions/user.actions'

class DeviseUnlocksShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      token: ''
    }
  }

  componentDidMount () {
    const urlParams = new URLSearchParams(this.props.location.search)
    const token = urlParams.get('unlock_token')

    this.props.dispatch(userActions.unlock(token))
  }

  render() {
    return (
      <Row>
        <Col md={{ size: 6, offset: 3}}>
          <h2>Unlocking your account ...</h2>
        </Col>
      </Row>
    )
  }
}

export default connect()(DeviseUnlocksShow)
