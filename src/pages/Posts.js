import React, { Component } from 'react'
import Postlist from "./Postlist";


export class Posts extends Component {
  render() {
    return (
      <div>
        <h1>Posts</h1>
        <Postlist/>
      </div>
    );
  }
}

export default Posts