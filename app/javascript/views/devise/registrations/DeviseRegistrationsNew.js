import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Col,
  Row
} from 'reactstrap'

import { userActions } from '../../../actions/user.actions'

class DeviseRegistrationsNew extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        email: '',
        password: ''
      },
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    const { user } = this.state
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({ submitted: true })
    const { user } = this.state
    if (user.email && user.password) {
      this.props.dispatch(userActions.register(user))
    }
  }

  render() {
    const { registering, errors } = this.props
    const { user, submitted } = this.state
    return (
      <Row>
        <Col md={{ size: 6, offset: 3}}>
          <h2>Register</h2>
          <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group' + (submitted && (!user.email || (errors && errors.email)) ? ' has-error' : '')}>
              <label htmlFor="user_email">Email</label>
              <input type="text" className="form-control" name="email" id="user_email" value={user.email} onChange={this.handleChange} />
              {submitted && !user.email &&
                <div className="help-block">Email is required</div>
              }
              {submitted && errors && errors.email &&
                <div className="help-block">{errors.email}</div>
              }
            </div>
            <div className={'form-group' + (submitted && (!user.password || (errors && errors.password)) ? ' has-error' : '')}>
              <label htmlFor="user_password">Password</label>
              <input type="password" className="form-control" name="password" id="user_password" value={user.password} onChange={this.handleChange} />
              {submitted && !user.password &&
                <div className="help-block">Password is required</div>
              }
              {submitted && errors && errors.password &&
                <div className="help-block">{errors.password}</div>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Register</button>
              {registering &&
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              }
              <Link to="/users/sign_in" className="btn btn-link">Cancel</Link>
              <Link to="/users/confirmation/new" className="btn btn-link">Did not received the confirmation email ?</Link>
            </div>
          </form>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  const { registering, errors } = state.registration
  return {
    registering,
    errors
  }
}

export default connect(mapStateToProps)(DeviseRegistrationsNew)
