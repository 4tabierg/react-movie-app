import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import {AppProvider} from './context/AppContext'
import Favorites from './components/Favorites'

function App() {

  return (
    <AppProvider>
      <Router>
      <Header>
      </Header>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/favorites'>
          <Favorites/>
        </Route>
      </Switch>
    </Router>
    </AppProvider>
  );
}

export default App;
