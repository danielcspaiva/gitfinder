import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import UserDetails from './views/UserDetails';
import RepoDetails from './views/RepoDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:user" component={UserDetails} />
        <Route exact path="/:user/:repo" component={RepoDetails} />
      </Switch>
    </Router>
  );
}

export default App;
