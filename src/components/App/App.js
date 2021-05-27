import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';

function App() {
  return (
    <div className="wrapper">
      <h1>Pseudokrew</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;