import React, { Component } from 'react'
import Postlist from "./Postlist";


export class Posts extends Component {
  render() {
    return (
      <div className="main-content">
        <h1>Posts</h1>
        <Postlist/>
      </div>
    );
  }
}

export default Posts