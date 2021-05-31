import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import NavBar from './Nav/NavBar'
import Home from './Home'
import Blog from './Blog'


function Main() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/recipes'>
          
        </Route>
        <Route path='/'>
          <Home /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
