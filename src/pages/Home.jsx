import React, { Component } from 'react'
import { ReactComponent as IchLogo } from '../img/ich_ui.svg'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <main>
        <div className="main-container">
          <div className="home-container">
            <h2 className="center">Главная</h2>
            <IchLogo className="my-avatar" />
            <p>Игорь Головко</p>
            <Link to="about" className="more">Узнать обо мне больше</Link>
          </div>
        </div>
      </main>
    )
  }
}
