import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ErrorLogo } from '../img/error_ui.svg'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="error-container">
          <ErrorLogo class="error-logo"/>
          <h2 className="error">Упс! Ошибка 404</h2>
          <p>Возможно, вы попали не в тот путь маршрутизации.</p>
          <Link to="/" className="back-home">Вернуться домой</Link>
        </div>
      </div>
    )
  }
}
