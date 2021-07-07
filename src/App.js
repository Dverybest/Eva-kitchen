import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandingPage'
import MenuPage from './pages/menuPage/MenuPage'
import AboutPage from './pages/aboutPage/AboutPage'
import ContactPage from './pages/contactPage/ContactPage';
import { NotificationContainer } from "react-notifications";
import OrderPage from './pages/orderPage/OrderPage'
import checkoutPage from './pages/CheckoutPage/checkoutPage'
import SignIn from './components/Authentication/signIn'
import SignUp from './components/Authentication/signUp'

function App() {
  return (
      <BrowserRouter>   
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/menu' component={MenuPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contact-us' component={ContactPage} />
          <Route exact path='/order' component={OrderPage}/>
          <Route exact path="/checkout" component={checkoutPage}/>
          <Route exact path="/signIn" component={SignIn}/>
          <Route exact path="/signUp" component={SignUp}/>

        </Switch>  
        <NotificationContainer/>
      </BrowserRouter>
  );
}

export default App;
