import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Settings from '../Settings/Settings';
import useToken from './useToken';

function App() {

  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  console.log(token)

  return (
    <div className="wrapper">
      <h1>Pseudokrew</h1>
      <h2>Currently logged in as <span className="capitalize-name">{token.username}</span></h2>
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