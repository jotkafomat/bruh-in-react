import React, { Component } from "react";
import Navigation from "./components/navigation";
import logo from "./pics/bruh.png";
import advert from "./pics/singles-img.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PageRenderer from "./page-renderer";
import Home from './pages/Home';
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import CreatePost from './pages/CreatePost.js';
import Signup from './pages/Signup';
import Signin from './pages/Signin';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      logged_in: false,
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(data) {
    this.setState({
      logged_in: true,
      user: data.user
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>
              Bruhbook <img src={logo} alt="Logo" />
            </h1>
          </header>
          <Navigation />
          <Switch>
            <Route exact path="/" render = { props => (
              <Home {...props} handleLogin = {this.handleLogin} loggedInStatus = {this.state.loggedInStatus} />)}/>
            <Route path="/createpost" component={CreatePost}/> 
            <Route path="/posts" render={(props) => <Posts />} />
            <Route path="/users" render={(props) => <Users />} />
            <Route path="/:page" component={PageRenderer} />
            <Route path="/" render={() => <Redirect to="/home" />} />
            <Route path="/signup" render = { props => (
              <Signup {...props} handleLogin = {this.handleLogin} loggedInStatus = {this.state.loggedInStatus} />)}/>
            <Route path="/signin" render={(props) => (
              <Signin {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>)}/>
            <Route component={() => 404} />
          </Switch>
          <div className="right-content"><img src={advert} alt="advert" /></div>
          <footer>Bruhbook &reg; 2020</footer>
        </div>
      </Router>
    );
  }
}
