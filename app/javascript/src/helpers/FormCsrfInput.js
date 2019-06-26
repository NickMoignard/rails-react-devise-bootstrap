/*
** Form CSRF Input
*
*  Build an input HTML element with the Rails form CSRF token
*/
import React from 'react'

import FormCsrf from './FormCsrf'

const FormCsrfInput = () => (
  <input
    type="hidden"
    name="authenticity_token"
    value={FormCsrf.csrfToken()}
    readOnly={true}
  />
)

export default FormCsrfInput
