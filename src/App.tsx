import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import BasicHooks from './pages/BasicHooks';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/basics">
            <BasicHooks />
          </Route>
          <Redirect to="/basics" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
