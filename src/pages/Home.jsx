import React, { Component } from 'react'
import { ReactComponent as IchLogo } from '../img/ich_ui.svg'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <main>
        <div className="main-container">
          <div className="home-container">
            <h2 className="center">Home</h2>
            <IchLogo className="my-avatar" />
            <p>Arthur Efimov</p>
            <Link to="about" className="more">Get to know him better</Link>
          </div>
        </div>
      </main>
    )
  }
}
