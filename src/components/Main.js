import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import NavBar from './Nav/NavBar'
import Home from './Home'


function Main() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/'>
          <Home /> 
        </Route>
        <Route path='/about'>
          
        </Route>
        <Route path='/recipes'>
          
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
