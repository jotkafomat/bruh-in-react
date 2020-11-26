import React, {Component} from 'react';
import Navigation from './components/navigation'
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PageRenderer from './page-renderer';
import logo from './pics/bruh.png';
import Posts from './pages/Posts';
import Users from './pages/Users'
// import Login from './components/login';
// import Post from './components/singlePost';
// import AllPosts from './components/allPosts';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      logged_in: false,
      user: {}
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header><h1>Bruhbook <img src={logo} alt="Logo" /></h1></header>
          <Navigation />
          <Switch>
            <Route path="/posts" render= { props => (<Posts/>) }/>
            <Route path="/users" render= { props => (<Users/>) }/>
            <Route path="/:page" component={PageRenderer} />
            <Route path="/" render={() => <Redirect to="/home"/>}/>
            <Route path="/log_in" render={ (props)=> 
            <Redirect to="/log-in" updateAuthState={this.updateAuthState} authToken={this.state.authToken} /> }/>
            <Route component={() => 404 }/>
          </Switch>
          <footer>Bruhbook &reg; 2020</footer>
        </div>
      </Router>
    );
  }
}

export default App;
