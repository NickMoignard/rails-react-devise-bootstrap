/*
** Form CSRF Input
*
*  Build an input HTML element with the Rails form CSRF token
*/
import React from 'react'

import { FormCsrf } from './FormCsrf'

export class FormCsrfInput extends React.Component {
  render() {
    return (
      <input
        type="hidden"
        name="authenticity_token"
        value={FormCsrf.csrfToken()}
        readOnly={true}
      />
    )
  }
}
