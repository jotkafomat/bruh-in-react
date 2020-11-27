import React, { Component } from "react";
import SignupForm from './SignupForm'

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { sent: "" };

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }
  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/posts");
  }
  render() {
    return (
      <div className="main-content">
        <h1>Become A Bruh</h1>
        <SignupForm handleSuccessfulAuth={this.handleSuccessfulAuth}/>
      </div>
    );
  }
}

export default Signup;