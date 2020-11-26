import React from 'react';
import Navigation from './components/navigation'
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PageRenderer from './page-renderer';
import logo from './pics/bruh.png';
// import Login from './components/login';
// import Post from './components/singlePost';
// import AllPosts from './components/allPosts';


function App() {
  return (
    <Router>
      <div className="App">
        <header><h1>Bruhbook <img src={logo} alt="Logo" /></h1></header>
        <Navigation />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home"/>}/>
          <Route component={() => 404}/>
        </Switch>
        <footer>Bruhbook &reg; 2020</footer>
      </div>
      
    </Router>
  );
}

export default App;
