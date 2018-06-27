import { Alert } from 'reactstrap'
import { connect } from 'react-redux'
import React from 'react'

import FlashMessage from './FlashMessage'

class FlashMessages extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      alert: {
        messages: []
      }
    }
  }

  render() {
    const { messages } = this.props
    const flashMessages = messages.map(message => {
      return (
        <FlashMessage key={message.id} message={message} />
      )
    })

    return(
      <div>
        {flashMessages}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { messages } = state.alert
  return {
    messages
  }
}

export default connect(mapStateToProps)(FlashMessages)
