import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as HomeLogo } from '../img/home_ui.svg'

import {ReactComponent as AboutLogo} from '../img/about_ui.svg'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="header-nav">
            <li>
              <div className="nav-block">
                <Link className="link" to="/">
                  <HomeLogo className="link-logo" />
                  <p>Главная</p>
                </Link>
              </div>
            </li>
            <li>
              <div className="nav-block">
                <Link className="link" to="about">
                  <AboutLogo className="link-logo" />
                  <p>Обо мне</p>
                </Link>
              </div>
            </li>
        </ul>
      </nav>
    )
  }
}
