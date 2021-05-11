import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import NavBar from './Nav/NavBar'


function Main() {
  return (
    <Router>
      <Switch>
        <Route path='/'>

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
