import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    let self = this;
    let email = document.getElementById("email-input").value;
    axios({
      url: "http://localhost:5000/api/v1/auths",
      method: "POST",
      mode: "cors",
      params: {
        auth: {
          email: email,
          password: document.getElementById("password-input").value,
        },
      },
    })
      .then(function (response) {
        console.log(response);
        self.props.updateAuthToken(
          response.data.token,
          response.body.success.username
        );
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
