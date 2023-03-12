import React, { Component } from 'react'
import Navigation from './Navigation'


export default class Header extends Component {
  render() {
    return (
        <>
      <header className="header">
        <div className="container">
            <div className="left-content">
                <h1 className="title">Визитка</h1>
            </div>
            <div className="right-content">
                <Navigation />
            </div>
        </div>
      </header>
      </>
    )
  }
}
