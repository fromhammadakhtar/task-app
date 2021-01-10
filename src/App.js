import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
 
      <Router >
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </Router>
   
  );
};

export default App;
