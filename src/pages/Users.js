import React, { Component } from 'react'
import Userlist from "./Userlist.js";


export class Users extends Component {
  render() {
    return (
      <div className="main-content">
        <h1>Bruhs</h1>
        <Userlist/>
      </div>
    );
  }
}

export default Users