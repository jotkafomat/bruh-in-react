import React, {Component} from 'react';
import Navigation from './components/navigation';
import {BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import PageRenderer from './page-renderer';
import Post from './pages/post';
import logo from './pics/bruh.png';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authToken: null,
      username: null
    }
    this.updateAuthState = this.updateAuthState.bind(this)
  }

  updateAuthState(token, username) {
    console.log(token, username)
    this.setState({
      authToken: token,
      username: username,
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header><h1>Bruhbook <img src={logo} alt="Logo" /></h1></header>
          <Navigation />
          <Switch>
            <Route path="/:page" component={PageRenderer} />
            <Route exact path="/post" render= { props => (
               <Post {...props} loggedInStatus = {this.state.loggedInStatus} />)}/>
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
