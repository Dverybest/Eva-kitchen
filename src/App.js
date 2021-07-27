import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/LandingPage'
import MenuPage from './pages/menuPage/MenuPage'
import AboutPage from './pages/aboutPage/AboutPage'
import ContactPage from './pages/contactPage/ContactPage';
import { NotificationContainer } from "react-notifications";
import OrderPage from './pages/orderPage/OrderPage'
import checkoutPage from './pages/CheckoutPage/checkoutPage'
import ScrollToTop from './components/scrollTop'
import Shipping from './components/shipping/shipping'

function App() {
  return (
      <BrowserRouter>   
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/menu' component={MenuPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contact-us' component={ContactPage} />
          <Route exact path='/order' component={OrderPage}/>
          <Route exact path="/checkout" component={checkoutPage}/>
          <Route exact path="/shipping" component={Shipping}/>

        </Switch>  
        <NotificationContainer/>
      </BrowserRouter>
  );
}

export default App;
