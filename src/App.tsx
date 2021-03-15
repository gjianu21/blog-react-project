import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  
              </Route>
              <Route path="/register">
                  
              </Route>
              <Route path="/dashboard">
                  
              </Route>
              <Route path="*">
                  
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
