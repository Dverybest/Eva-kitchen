import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandingPage'
import MenuPage from './pages/menuPage/MenuPage'


function App() {
  return (
    <BrowserRouter>   
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/menu' component={MenuPage} />
      </Switch>  
    </BrowserRouter>
  );
}

export default App;
