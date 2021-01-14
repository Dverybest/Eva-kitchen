import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandingPage'
import MenuPage from './pages/menuPage/MenuPage'
import AboutPage from './pages/aboutPage/AboutPage'
import ContactPage from './pages/contactPage/ContactPage';


function App() {
  return (
    <BrowserRouter>   
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/menu' component={MenuPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/contact-us' component={ContactPage} />
      </Switch>  
    </BrowserRouter>
  );
}

export default App;
