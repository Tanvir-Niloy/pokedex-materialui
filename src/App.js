
import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Pokedex from './containers/Pokedex';
import AppNavigator from './components/AppNavigator'


function App() {
  return (
    <Router>
      <AppNavigator/>
      <Switch>
      <Route exact path='/' component={Pokedex} />
     </Switch>
    </Router>
  );
}

export default App;
