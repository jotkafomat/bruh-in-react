import React from "react";
import moment from "moment";

class Postlist extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],  
    };
  }

  componentDidMount() {
    fetch("https://bruhbook-api.herokuapp.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: [...result.posts],
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section>
          {posts.map((postname) => (
            <article className="container" key={postname.post.id}>
              <p>{postname.name}, on {moment(postname.post.created_at).format('MMMM Do YYYY, h:mm a')}, said:</p>
              <p>{postname.post.text_content}</p>
            </article>
          ))}
        </section>
      );
    }
  }
}

export default Postlist;