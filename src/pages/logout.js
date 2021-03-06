import React, { Component } from 'react';

class Logout extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e) {
    e.preventDefault()
    this.props.updateAuthToken(null)
  }

  render() {
    return (
      <div className="main-content">
        <h1>Why did you log out?</h1>
        <h2>You're going to miss all the Bruh bits</h2>
        <a href='#' onClick={this.props.handleClick}>
       {this.props.label}
       </a>
      </div>
    )
  }
}

export default Logout