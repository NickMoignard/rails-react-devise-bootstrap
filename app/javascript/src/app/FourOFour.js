import React from 'react'
import { Button } from 'reactstrap'
import { history } from '../helpers/History'

const FourOFour = ({ location }) => (
  <div>
    <h3>404 - No match for <code>{location.pathname}</code></h3>
    <Button color="primary" onClick={() => history.push('/')}>Back to the homepage</Button>
  </div>
)

export default FourOFour
