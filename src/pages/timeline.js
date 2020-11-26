import React, { Component } from "react";
import ReactDOM from "react-dom";
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
      url: "https://bruhbook-api.herokuapp.com",
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
              username={post.username}
              created_at={post.created_at}
            />
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
