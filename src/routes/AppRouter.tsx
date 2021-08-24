import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {HomeView, MainView} from '../views/';


  
export const AppRouter = () => {
  const dispatch = useDispatch()

  return (
    
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomeView/>
        </Route>
        <Route exact path='/main'>
          <MainView/>
        </Route>
      </Switch>
    </Router>
  )
}
