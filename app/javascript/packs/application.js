/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// Bootstrap
import $ from 'jquery'
import 'popper.js/dist/popper.js'
import 'bootstrap/dist/js/bootstrap'
import '../stylesheets/application.sass'

import App from '../views/App'
import { store } from '../stores'

document.addEventListener('DOMContentLoaded', function() {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
