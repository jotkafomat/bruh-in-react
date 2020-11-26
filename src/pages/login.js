import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    let self = this;
        axios.post('/api/v1/auths',{
          auth: {
            email: document.getElementById('email-input').value,
            password: document.getElementById('password-input').value
      },
    })
      .then(function (response) {
        self.props.updateAuthToken(
          response.data.success.token, 
          response.data.success.username)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Bruh log in</h1>
        <form onSubmit={e => {e.preventDefault();}} className="form-login">
          <div className="form-input">
            <input id="email-input"  
              label="Email" 
              class="email" 
              type="email" 
              name="email" />

            <input id="password-input" 
              label="Password"
              class="password"
              type="password"
              name="password" />
          </div>
            <button type="submit" onClick={this.handleLogin}
            label="Log In"
            class="login"
            name="login" />
        </form>

        <a href="/sign_up">
          <button name="signup" 
            class="secondary" 
            label="Sign Up" />
        </a>
        
      </div>
    );
  }
}
export default Login;
