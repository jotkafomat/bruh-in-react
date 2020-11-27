import React, { Component } from "react";

export class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }    
    };

  }

  handleInputChange = (e) =>
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });

  submitForm = async (e) => {
    if (e) e.preventDefault();
    const res = await fetch("https://bruhbook-api.herokuapp.com/signup", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.status !== 500 ) {
      this.setState({ user: data.user })
      this.props.handleSuccessfulAuth(data)
    } 
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.user.name}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={this.handleInputChange}
            value={this.state.user.email}
            required
          />
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleInputChange}
            value={this.state.user.password}
            required
          />
          <label htmlFor="name">Password Confirmation</label>
          <input
            type="password"
            name="password_confirmation"
            onChange={this.handleInputChange}
            value={this.state.user.password_confirmation}
            required
          />
          <input type="submit" className="submit" />
        </form>
      </div>
    );
  }
}

export default SignupForm;