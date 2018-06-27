import { Alert } from 'reactstrap'
import { connect } from 'react-redux'
import React from 'react'

class FlashMessage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: true
    }

    this.onDismiss = this.onDismiss.bind(this)
  }

  componentDidMount() {
    this.timer = setTimeout(
      this.onDismiss,
      this.props.timeout
    )
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  onDismiss() {
    this.setState({ visible: false })
  }


  render() {
    const { message } = this.props
    return (
      <Alert
        color={message.type}
        isOpen={this.state.visible}
        toggle={this.onDismiss}
      >
        {message.text}
      </Alert>
    )
  }
}

FlashMessage.defaultProps = {
  timeout: 3000
}

export default FlashMessage
