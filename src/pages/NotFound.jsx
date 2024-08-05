import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ErrorLogo } from '../img/error_ui.svg'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="error-container">
          <ErrorLogo class="error-logo"/>
          <h2 className="error">Oops! The 404 Error.</h2>
          <p>You entered the wrong page.</p>
          <Link to="/" className="back-home">Go back.</Link>
        </div>
      </div>
    )
  }
}
