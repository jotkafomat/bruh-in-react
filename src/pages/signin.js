import React, { Component } from "react";
import SigninForm from './SignInForm'

export class Signin extends Component {
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
      <div>
        <h1>Sign in</h1>
        <SigninForm handleSuccessfulAuth={this.handleSuccessfulAuth}/>
      </div>
    );
  }
}

export default Signin;