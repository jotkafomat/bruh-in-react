import React, { Component } from "react";
import Navigation from "./components/navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PageRenderer from "./page-renderer";
import logo from "./pics/bruh.png";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Signin from "./pages/Signin.js";
import CreatePost from './pages/CreatePost.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in: false,
      user: {},
    };
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
            <Route path="/createpost" component={CreatePost}/> 
            <Route path="/posts" render={(props) => <Posts />} />
            <Route path="/users" render={(props) => <Users />} />
            <Route path="/:page" component={PageRenderer} />
            <Route path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/signin" render={(props) => (<Signin {...props} handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}/>)}/>
            <Route component={() => 404} />
          </Switch>
          <footer>Bruhbook &reg; 2020</footer>
        </div>
      </Router>
    );
  }
}

export default App;
