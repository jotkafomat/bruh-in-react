import React, { Component } from 'react';
import SignupForm from './SignupForm'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
               <h1>Home</h1>
                <p>Welcome My Bruh</p>
            </div>
         );
    }
}