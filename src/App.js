import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
    <div className="App">

     <Navbar />
     <Route path='/' Component={LandingPage} />

     <LandingPage />

    </div>
=======
    <BrowserRouter>   
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>  
>>>>>>> 0578b74e9408827c2e4a217e8d54f96e32addb86
    </BrowserRouter>
  );
}

export default App;
