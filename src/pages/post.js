import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Post extends Component {
  
    render() {
      return (
        <div className='post'>
            <div className='post-message'>
            message:{this.props.message}
            </div>
            <div className='post-username'></div>
            <small> Username:{this.props.username} </small>
            <div className='post-created_at'>
            <small> Created at: {this.props.created_at} </small>
            </div>
        </div>
        )
    }   
}

export default Post;
