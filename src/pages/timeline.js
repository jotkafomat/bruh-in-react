import React, { Component } from "react";
import Post from "./post";
import axios from "axios";

class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
    this.getPosts = this.getPosts.bind(this);
  }
  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    var self = this;
    axios({
      url: "'/api/v1/posts'",
      mode: "no-cors",
    })
      .then(function (response) {
        self.setState({posts: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log("this state", this.state.posts)
    if (this.state.posts !== null) {
      return (
        <div className="post-list">
          <h1>Timeline</h1>
          {this.state.posts.map((post) => (
            <Post
              key={post.id}
              message={post.message}
              username={post.user.name}
              created_at={post.created_at}/>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Timeline</h1>
          <div></div>
        </div>
      );
    }
  }
}
export default AllPosts;
