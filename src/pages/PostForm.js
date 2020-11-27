import React, { Component } from "react";

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        text_content: "",
        user_id: null
      },
    };
  }
  handleInputChange = (e) =>
    this.setState({
      post: { ...this.state.post, [e.target.name]: e.target.value },
    });

  submitForm = async (e) => {
    if (e) e.preventDefault();
    const res = await fetch("https://bruhbook-api.herokuapp.com/posts", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!data.hasOwnProperty("error")) {
      this.setState({ post: data.post })
      window.location.href = 'http://localhost:3000/posts';
    }
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor="text_content">Content: </label>
        <input
          type="textarea"
          name="text_content"
          onChange={this.handleInputChange}
          value={this.state.post.text_content}
        />
        <label htmlFor="user_id">User ID: </label>
        <input
          type="textarea"
          name="user_id"
          onChange={this.handleInputChange}
          value={this.state.post.user_id}
          required
        />
        <input type="submit" className="submit" />
      </form>
    );
  }
}

export default PostForm;