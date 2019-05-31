import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Button,
  Col,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row
} from 'reactstrap'

import { homeActions } from './actions'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false,
      deleteUserId: null
    }

    this.confirmDelete = this.confirmDelete.bind(this)
    this.cancelDeleteUser = this.cancelDeleteUser.bind(this)
    this.handleDeleteUser = this.handleDeleteUser.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(homeActions.getAll())
  }

  handleDeleteUser() {
    this.setState({
      modal: false
    })

    this.props.dispatch(homeActions.deleteUser(this.state.deleteUserId))
  }

  confirmDelete(userId) {
    this.setState({
      modal: true,
      deleteUserId: userId
    })
  }

  cancelDeleteUser() {
    this.setState({
      modal: false,
      deleteUserId: null
    })
  }

  userDeleteStatus(user) {
    if (user.deleting) {
      return (<em> - Deleting...</em>)
    } else {
      let deleteButton = <span> - <Button color="danger" onClick={() => { this.confirmDelete(user.id) } }>Delete</Button></span>
      if (user.deleteError) {
        return (
          <span>
            {deleteButton}
            <br/><span className="text-danger">ERROR: {user.deleteError}</span>
          </span>
        )
      } else {
        return deleteButton
      }
    }
  }

  render() {
    const { user, users } = this.props
    return (
      <div>
        <h1>Hi {user.email}!</h1>
        <p>You&#39;re logged in with React!!</p>
        <h3>All registered users:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
        {users.items &&
          <ListGroup>
            {users.items.map((dbUser, index) =>
              <ListGroupItem key={dbUser.id}>
                {dbUser.email}
                {dbUser.id !== user.id && this.userDeleteStatus(dbUser)}
              </ListGroupItem>
            )}
          </ListGroup>
        }
        <p>
          <Link to="/users/sign_in">Logout</Link>
        </p>

        <Modal isOpen={this.state.modal} toggle={this.confirmDelete}>
          <ModalHeader toggle={this.confirmDelete}>Confirm deleting user</ModalHeader>
          <ModalBody>
            Are you sure you wish to delete this user?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.handleDeleteUser}>Confirm</Button>{' '}
            <Button color="secondary" onClick={this.cancelDeleteUser}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state
  const { user } = authentication
  return {
    user,
    users
  }
}

export default connect(mapStateToProps)(HomePage)
