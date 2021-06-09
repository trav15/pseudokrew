import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import GetTransactions from '../GetTransactions/GetTransactions';
import Settings from '../Settings/Settings';
import useToken from './useToken';

function App() {

  const { token, setToken, clearToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  console.log(token)

  return (
    <div className="wrapper">
      <h1>Pseudokrew</h1>
      <h2>Currently logged in as <span className="capitalize-name">{token.username}</span></h2>
      <GetTransactions token={token.authToken}></GetTransactions>
      <button className="logout-btn" onClick={clearToken}>Log Out</button>
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