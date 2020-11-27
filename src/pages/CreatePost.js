import React, { Component } from 'react'
import PostForm from "./PostForm.js";


export class CreatePost extends Component {
  render() {
    return (
      <div className="main-content">
        <h1>Create a Post</h1>
          <PostForm/>
      </div>
    );
  }
}

export default CreatePost