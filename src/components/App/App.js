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
  
  return (
    <div className="wrapper">
      <h1>Pseudokrew</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/profile">
            <Profile username={token.username}/>
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